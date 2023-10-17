// You are adding a firewall feature for your service. The firewall only allows clients
// from certain IPv4 addresses to access the service. Firewall rules are defined in an
// ordered list of (verb, IP or CIDR) pairs. For example:
//
// rules = [
//   ("ALLOW", "192.168.100.0/24"),
//   ("DENY", "192.168.0.5/30"),
//   ("ALLOW", "192.168.1.1/22"),
//   ("DENY", "8.8.8.8/0"),
//   ("ALLOW", "1.2.3.4")
// ]
//
// Each CIDR represents a range of contiguous IP addresses. We will explain its details
// soon if you are unfamiliar with the concept. Your job is to write an access_ok(rules,
// target_ip) function that returns a boolean indicating whether the access should be
// granted to the target IPv4 address given a list of firewall rules, based on the verb
// of the first matching CIDR block in the rules. For example, given the above rules,
//
// # return `True` because it matches the first rule (ALLOW)
// access_ok(rules, "192.168.100.34")
//
// # return `False` because it matches the 4th rule (DENY)
// access_ok(rules, "8.8.8.8")

type Verb = "ALLOW" | "DENY";
type IPAddress = string; // x.x.x.x
type IPRange = string; // 'x.x.x.x/y'
export type Rule = [Verb, IPAddress | IPRange];

// O(n) time, O(1) space
// not possible to optimize for the given inputs
// however, if rules could be pre-processed and applied to multiple addresses
// then we could pre-convert the ranges to numbers and remove any unreachable rules (ie.
// duplicates or subsets of other rules)
//
// The only other optimization I can think of would be to then put those rules into a
// binary space partition based on their windows. It would still be O(n) time, but
// should be O(log(n)) time in the average case.

// first matching rule takes precedence
export default function access_ok(rules: Rule[], address: IPAddress): boolean {
  const addressAsNum = convertIPAddressToNumber(address);
  for (let i = 0; i < rules.length; i++) {
    if (inRange(rules[i], addressAsNum)) return rules[i][0] === "ALLOW";
  }
  return false;
}

function inRange(rule: Rule, address: number): boolean {
  const { num, bits } = convertRule(rule);
  const mask = Math.pow(2, 32) - Math.pow(2, 32 - bits);
  return (address & mask) === (num & mask);
}

type Range = {
  num: number;
  bits: number;
};
function convertRule(rule: Rule): Range {
  const [address, range] = rule[1].split("/");
  return {
    num: convertIPAddressToNumber(address),
    bits: parseInt(range, 10),
  };
}

function convertIPAddressToNumber(address: string): number {
  // assume valid ip address (ie. no input verification)
  return address
    .split(".")
    .reduce(
      (acc, cur, i) => acc + parseInt(cur, 10) * Math.pow(2, 8 * (3 - i)),
      0
    );
}

// debug to dump masks as binary
function maskToString(mask: number): string {
  return mask
    .toString(2)
    .split("")
    .map((c) => (c === "1" ? "1" : "0"))
    .join("");
}

import access_ok, { Rule } from "../isIPAddressAccessOK";

describe("isApaddressAccessOK", () => {
  const rules: Rule[] = [
    ["ALLOW", "192.168.100.0/24"],
    ["DENY", "192.168.0.5/30"],
    ["ALLOW", "192.168.1.1/22"],
    ["DENY", "8.8.8.8/0"],
    ["ALLOW", "1.2.3.4"],
  ];

  const examples = [
    { address: "192.168.100.34", expected: true },
    { address: "8.8.8.8", expected: false },
    { address: "192.168.0.5", expected: false },
  ];

  examples.forEach(({ address, expected }) => {
    it(`should ${expected ? "ACCEPT" : "REJECT"} ${address}`, () => {
      expect(access_ok(rules, address)).toBe(expected);
    });
  });
});

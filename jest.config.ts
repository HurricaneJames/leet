import type {Config} from 'jest';

const config = {
  verbose: true,
  testMatch: [
    "**/__tests__/**/*-(spec|test).[jt]s?(x)",
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

export default config;
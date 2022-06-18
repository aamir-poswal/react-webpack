//   export const REACT_APP_TEST_KEY = process.test.env.REACT_APP_TEST_KEY;
const config = {
  REACT_APP_TEST_KEY: process.env.REACT_APP_TEST_KEY,
  fmeCloudHealthCheck:
    "https://volue-geminitest.fmecloud.com/fmerest/v3/healthcheck",
};
export default config;

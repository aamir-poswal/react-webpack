//   export const REACT_APP_TEST_KEY = process.test.env.REACT_APP_TEST_KEY;
const config = {
  REACT_APP_TEST_KEY: process.env.REACT_APP_TEST_KEY,
  fmeCloudServerBaseURL: "https://volue-geminitest.fmecloud.com",
  fmeUserName: process.env.REACT_APP_FME_USERNAME,
  fmePassword: process.env.REACT_APP_FME_PASSWORD,
};
export default config;

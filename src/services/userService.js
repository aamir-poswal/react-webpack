import config from "../environments/TestEnvironmentConfig";

const loginToFMEServer = async () => {
  console.log("loginToFMEServer at the start");
  try {
    const data = `user=${config.fmeUserName}&password=${config.fmePassword}&expirationTimeout=360000`;
    const response = await fetch(
      `${config.fmeCloudServerBaseURL}/fmetoken/service/generate`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
        body: data,
      }
    );
    const status = await response.status;
    console.log(
      `loginToFMEServer response status ${status} ${
        status < 200 || status >= 300
      }`
    );
    if (status < 200 || status >= 300) {
      console.log("loginToFMEServer unexpected response from server");
      return Promise.reject(`loginToFMEServer error status code ${status}`);
    }
    const token = await response.text();
    console.log("loginToFMEServer at the end");
    return token;
  } catch (error) {
    console.error(`loginToFMEServer error ${error}`);
    return Promise.reject(error);
  }
};

export default {
  loginToFMEServer: loginToFMEServer,
};

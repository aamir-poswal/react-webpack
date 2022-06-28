import config from "../environments/TestEnvironmentConfig";

const loginToFMEServer = async () => {
  console.log("loginToFMEServer at the start");
  const data = `user=${config.fmeUserName}&password=${config.fmePassword}&expirationTimeout=360000`;
  const response = await fetch(
    `${config.fmeCloudServerBaseURL}/fmetoken/service/generate`,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: data,
    }
  ).catch(function (error) {
    console.log(error);
  });
  var status = await response.status;
  console.log(`loginToFMEServer response status ${status} ${status === 200}`);
  if (status !== 200) {
    console.log("loginToFMEServer unexpected response from server");
    return null;
  }
  const token = await response.text();
  console.log("loginToFMEServer at the end");
  return token;
};

export default {
  loginToFMEServer: loginToFMEServer,
};

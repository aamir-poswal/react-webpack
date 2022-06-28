import config from "../environments/TestEnvironmentConfig";

const pingFMEServer = () => {
  fetch(`${config.fmeCloudServerBaseURL}/fmerest/v3/healthcheck`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "GET",
  }).then((response) => console.log(response));
};

const loginToFMEServer = async () => {
  console.log("at the start of loginToFMEServer");
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
  const token = await response.text();
  console.log("at the end of loginToFMEServer ");
  return token;
};

export default {
  pingFMEServer: pingFMEServer,
  loginToFMEServer: loginToFMEServer,
};

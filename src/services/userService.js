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
  let data = `user=${config.fmeUserName}&password=${config.fmePassword}&expirationTimeout=360000`;
  let response = await fetch(
    `${config.fmeCloudServerBaseURL}/fmetoken/service/generate`,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: data,
    }
  ).catch(function (error) {
    console.log(error);
  });
  let token = await response.text();
  console.log("at the end of loginToFMEServer ");
  return token;
};

export default {
  pingFMEServer: pingFMEServer,
  loginToFMEServer: loginToFMEServer,
};

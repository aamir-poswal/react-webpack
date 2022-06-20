import config from "../environments/TestEnvironmentConfig";

const pingFMEServer = () => {
  fetch(`${config.fmeCloudServerBaseURL}/fmerest/v3/healthcheck`, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method: "GET",
    mode: "no-cors",
  }).then((response) => console.log(response));
};

const loginToFMEServer = () => {
  console.log("at the start of loginToFMEServer");
  var data = `user=${config.fmeUserName}&password=${config.fmePassword}&expirationTimeout=360000`;
  fetch(`${config.fmeCloudServerBaseURL}/fmetoken/service/generate`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body: data,
    mode: "no-cors",
  }).then((response) => console.log(response));
  console.log("at the end of loginToFMEServer");
  return "testTokenFromUserService";
};

export default {
  pingFMEServer: pingFMEServer,
  loginToFMEServer: loginToFMEServer,
};

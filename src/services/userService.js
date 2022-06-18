//import config from "/environments/environment.test.config";

const pingFMEServer = () => {
  //fetch(config.pingFMEServer).then((response) => console.log(response));
  fetch("https://volue-geminitest.fmecloud.com/fmerest/v3/healthcheck", {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: "GET",
    mode: "no-cors",
  }).then((response) => console.log(response));
};

export default {
  pingFMEServer: pingFMEServer,
};

import config from "../environments/TestEnvironmentConfig";

const downloadHTMLReport = (jobId, token) => {
  const data = { jobId: jobId };
  console.log(`at the start of downloadHTMLReport jobId ${jobId}`);
  fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/transact/GeminiWaterAnalysis/GeminiWaterAnalysis_FireFlowReport_DataDownload.fmw`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
    }
  )
    .then((response) => console.log(response))
    .catch(function () {
      console.log("error");
    });

  console.log(`at the end of downloadHTMLReport jobId ${jobId}`);
};

const downloadKML = (jobId, token) => {
  const data = { jobId: jobId };
  console.log(`at the start of downloadKML jobId ${jobId}`);
  fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/transact/GeminiWaterAnalysis/GeminiWaterAnalysis_FireFlowReport_DataDownload.fmw`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
      mode: "no-cors",
    }
  )
    .then((response) => console.log(response))
    .catch(function () {
      console.log("error");
    });

  console.log(`at the end of downloadKML jobId ${jobId}`);
};

export default {
  downloadHTMLReport: downloadHTMLReport,
  downloadKML: downloadKML,
};

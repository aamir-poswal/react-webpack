import config from "../environments/TestEnvironmentConfig";

const downloadHTMLReport = async (jobId, token) => {
  const data = { jobId: jobId };
  console.log(`at the start of downloadHTMLReport jobId ${jobId}`);
  var response = await fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/transact/GeminiWaterAnalysis/GeminiWaterAnalysis_FireFlowReport_DataDownload.fmw`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `fmetoken token=${token}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  ).catch(function () {
    console.log("error");
  });

  console.log(`at the end of downloadHTMLReport jobId ${jobId}`);
};

const downloadKML = async (jobId, token) => {
  const data = { jobId: jobId };
  console.log(`at the start of downloadKML jobId ${jobId}`);
  var response = fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/transact/GeminiWaterAnalysis/GeminiWaterAnalysis_FireFlowReport_DataDownload.fmw`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        Authorization: `fmetoken token=${token}`,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  ).catch(function () {
    console.log("error");
  });

  console.log(`at the end of downloadKML jobId ${jobId}`);
};

export default {
  downloadHTMLReport: downloadHTMLReport,
  downloadKML: downloadKML,
};

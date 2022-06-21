import config from "../environments/TestEnvironmentConfig";

const downloadHTMLReport = async (jobId, token) => {
  console.log(`at the start of downloadHTMLReport jobId ${jobId}`);
  var response = await fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/GeminiWaterAnalysisOutput/bar`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/octet-stream",
        Authorization: `fmetoken token=${token}`,
      },
      method: "GET",
    }
  ).catch(function () {
    console.log("error");
  });

  console.log(`at the end of downloadHTMLReport jobId ${jobId}`);
};

const downloadKML = async (jobId, token) => {
  console.log(`at the start of downloadKML jobId ${jobId}`);
  response = await fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/GeminiWaterAnalysisOutput/FireFlowReport.kml`,
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/octet-stream",
        Authorization: `fmetoken token=${token}`,
      },
      method: "GET",
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

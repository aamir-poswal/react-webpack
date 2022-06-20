import config from "../environments/TestEnvironmentConfig";

const submitJob = (exportToHTML, exportToKML) => {
  const data = { ExportToKML: exportToHTML, GenerateHTMLreport: exportToKML };
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
  ).then((response) => console.log(response));
  return 2278;
};

const getJobStatus = (jobId) => {
  fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/jobs/id/${jobId}`,
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "GET",
      mode: "no-cors",
    }
  ).then((response) => console.log(response));
};

export default {
  submitJob: submitJob,
  getJobStatus: getJobStatus,
};

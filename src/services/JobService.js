import config from "../environments/TestEnvironmentConfig";

const submitJob = () => {
  const data = { ExportToKML: "Yes", GenerateHTMLreport: "Yes" };
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
};

const getJobStatus = () => {
  fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/jobs/id/2265`,
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

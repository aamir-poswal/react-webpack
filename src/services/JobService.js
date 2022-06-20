import config from "../environments/TestEnvironmentConfig";

const submitJob = (exportToHTML, exportToKML) => {
  const data = { ExportToKML: exportToHTML, GenerateHTMLreport: exportToKML };
  console.log(
    `at the start of submitJob exportToHTML ${exportToHTML} exportToKML ${exportToKML}`
  );
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

  let jobId = 2278;
  console.log(`at the end of submitJob jobId ${jobId}`);

  return jobId;
};

const getJobStatus = (jobId) => {
  console.log(`at the start of getJobStatus jobId ${jobId}`);

  fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/jobs/id/${jobId}`,
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "GET",
      mode: "no-cors",
    }
  )
    .then((response) => console.log(response))
    .catch(function () {
      console.log("error");
    });

  console.log(`at the end of getJobStatus jobId ${jobId}`);
};

export default {
  submitJob: submitJob,
  getJobStatus: getJobStatus,
};

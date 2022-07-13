import config from "../environments/TestEnvironmentConfig";

const submitJob = async (exportToHTML, exportToKML, token) => {
  const data = {
    GenerateHTMLreport: exportToHTML,
    ExportToKML: exportToKML,
    CustomerNumber: "0999",
  };
  console.log(
    `at the start of submitJob exportToHTML ${exportToHTML} exportToKML ${exportToKML} token ${token}`
  );
  try {
    const response = await fetch(
      `${config.fmeCloudServerBaseURL}/fmerest/v3/transformations/transact/GeminiWaterAnalysis/GeminiWaterAnalysis_FireFlowReport_v2.fmw`,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json",
          Authorization: `fmetoken token=${token}`,
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const status = await response.status;
    console.log(
      `submitJob response status ${status} ${status < 200 || status >= 300}`
    );
    if (status < 200 || status >= 300) {
      console.log("submitJob unexpected response from server");
      return Promise.reject(`submitJob error status code ${status}`);
    }
    let jobId = await response.json();
    console.log(`at the end of submitJob jobId ${jobId}`);

    return jobId;
  } catch (error) {
    console.error(`submitJob error ${error}`);
    return Promise.reject(error);
  }
};

export default {
  submitJob: submitJob,
};

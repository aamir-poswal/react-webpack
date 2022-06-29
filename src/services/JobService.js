import config from "../environments/TestEnvironmentConfig";

const submitJob = async (exportToHTML, exportToKML, token) => {
  const data = { GenerateHTMLreport: exportToHTML, ExportToKML: exportToKML };
  console.log(
    `at the start of submitJob exportToHTML ${exportToHTML} exportToKML ${exportToKML} token ${token}`
  );
  try {
    const response = await fetch(
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
    );
    let status = await response.status;
    console.log(`submitJob response status ${status} ${status === 200}`);
    if (status !== 200) {
      console.log("submitJob unexpected response from server");
      return null;
    }
    let jobId = await response.json();
    console.log(`at the end of submitJob jobId ${jobId}`);

    return jobId;
  } catch (error) {
    console.log(`submitJob error ${error}`);
    return null;
  }
};

export default {
  submitJob: submitJob,
};

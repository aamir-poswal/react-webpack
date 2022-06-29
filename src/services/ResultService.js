import config from "../environments/TestEnvironmentConfig";

const downloadHTMLReport = async (jobId, token) => {
  console.log(`at the start of downloadHTMLReport jobId ${jobId}`);
  try {
    const response = await fetch(
      `${config.fmeCloudServerBaseURL}/fmerest/v3/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/GeminiWaterAnalysisOutput/FireFlowReport.html`,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/octet-stream",
          Authorization: `fmetoken token=${token}`,
        },
        method: "GET",
      }
    );
    let status = await response.status;
    console.log(
      `downloadHTMLReport response status ${status} ${status === 200}`
    );
    if (status !== 200) {
      console.log("downloadHTMLReport unexpected response from server");
      return null;
    }
    const myBlob = await response.blob();
    console.log(`at the end of downloadHTMLReport jobId ${jobId}`);
    return myBlob;
  } catch (error) {
    console.log(`downloadHTMLReport error ${error}`);
  }
};

const downloadKML = async (jobId, token) => {
  console.log(`at the start of downloadKML jobId ${jobId}`);
  try {
    let response = await fetch(
      `${config.fmeCloudServerBaseURL}/fmerest/v3/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/GeminiWaterAnalysisOutput/FireFlowReport.kml`,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/octet-stream",
          Authorization: `fmetoken token=${token}`,
        },
        method: "GET",
      }
    );
    let status = await response.status;
    console.log(`downloadKML response status ${status} ${status === 200}`);
    if (status !== 200) {
      console.log("downloadKML unexpected response from server");
      return null;
    }
    let blob = await response.blob();
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "FireFlowReport.kml";
    document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click();
    a.remove();

    console.log(`at the end of downloadKML jobId ${jobId}`);
  } catch (error) {
    console.log(`downloadKML error ${error}`);
    return null;
  }
};

export default {
  downloadHTMLReport: downloadHTMLReport,
  downloadKML: downloadKML,
};

import config from "../environments/TestEnvironmentConfig";

const downloadHTMLReport = async (jobId, token) => {
  console.log(`at the start of downloadHTMLReport jobId ${jobId}`);
  var response = await fetch(
    `${config.fmeCloudServerBaseURL}/fmerest/v3/resources/connections/FME_SHAREDRESOURCE_DATA/filesys/GeminiWaterAnalysisOutput/FireFlowReport.html`,
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

  // var myBlob = new Blob(["Hello"], { type: "text/plain" });
  // var myReader = new FileReader();
  // //handler executed once reading(blob content referenced to a variable) from blob is finished.
  // myReader.addEventListener("loadend", function (e) {
  //   document.getElementById("text").innerHTML = e.srcElement.result; //prints a string
  // });
  // //start the reading process.
  // myReader.readAsText(myBlob);

  let myBlob = await response.blob();
  let myReader = new FileReader();
  //handler executed once reading(blob content referenced to a variable) from blob is finished.
  myReader.addEventListener("loadend", function (e) {
    console.log(` target result ${e.target.result}`);
    document.getElementById("text").innerHTML = e.target.result; //prints a string
  });
  //start the reading process.
  myReader.readAsText(myBlob);

  console.log(`at the end of downloadHTMLReport jobId ${jobId}`);
};

const downloadKML = async (jobId, token) => {
  console.log(`at the start of downloadKML jobId ${jobId}`);
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
  ).catch(function () {
    console.log("error");
  });
  let blob = await response.blob();
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.href = url;
  a.download = "FireFlowReport.kml";
  document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
  a.click();
  a.remove();

  console.log(`at the end of downloadKML jobId ${jobId}`);
};

export default {
  downloadHTMLReport: downloadHTMLReport,
  downloadKML: downloadKML,
};

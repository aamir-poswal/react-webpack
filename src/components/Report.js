import React, { useState, useContext, useEffect, useRef } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ResultService from "../services/ResultService";
import ReactDOM from "react-dom";
const Report = () => {
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);
  const htmlReport = useRef();
  useEffect(() => {
    console.log(`job id in report component ${jobId}`);
    ResultService.downloadHTMLReport(jobId, token).then((myBlob) => {
      let myReader = new FileReader();
      myReader.addEventListener("loadend", function (e) {
        document.getElementById("htmlReport").innerText = e.target.result; //prints a string
      });
      //start the reading process.
      myReader.readAsText(myBlob);
    });
  }, []);
  return (
    <div>
      <div className="container fluid">
        <div className="row">
          <div id="htmlReport"></div>
        </div>
      </div>
    </div>
  );
};
export default Report;

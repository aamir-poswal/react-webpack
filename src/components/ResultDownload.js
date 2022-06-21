import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ResultService from "../services/ResultService";
function ResultDownload() {
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);
  useEffect(() => {
    console.log(`job id in result download component ${jobId}`);
  }, []);

  const downloadKML = (event) => {
    console.log(`at the start of downloadKML job id ${jobId}`);
    event.preventDefault();
    //ResultService.downloadKML(jobId, token);
    console.log(`at the end of downloadKML job id ${jobId}`);
  };

  return (
    <div>
      <div className="container fluid">
        <div className="row">
          <div className="col pt-4 offset-md-10 offset-lg-10 pb-2">
            <button className="btn btn-primary" onClick={downloadKML}>
              Download KML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDownload;

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

    const download = async () => {
      await ResultService.downloadKML(jobId, token);
    };
    download().catch((error) => {
      console.error("downloadKML download Error:", error);
    });

    console.log(`at the end of downloadKML job id ${jobId}`);
  };

  return (
    <div>
      <div className="container fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-8  pt-4 offset-lg-9 offset-md-8 offset-sm-6 offset-xs-4  pb-2">
            <button className="btn btn-outline-secondary" onClick={downloadKML}>
              Download KML
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDownload;

import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
function ResultDownload() {
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);
  useEffect(() => {
    console.log(`job id in result download component ${jobId}`);
  }, []);
  return (
    <div>
      <div className="container fluid">
        <div className="row">
          <div className="col pt-4 offset-md-10 offset-lg-10 pb-2">
            <button className="btn btn-primary">Download KML</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDownload;

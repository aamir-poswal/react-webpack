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
      <div className="row row-action-height">
        <button className="button-23">Download KML</button>
      </div>
    </div>
  );
}

export default ResultDownload;

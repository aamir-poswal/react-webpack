import React, { useContext, useEffect } from "react";
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
    <button className="btn btn-outline-secondary" onClick={downloadKML}>
      Download KML
    </button>
  );
}

export default ResultDownload;

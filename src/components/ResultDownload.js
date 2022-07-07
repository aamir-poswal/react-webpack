import React, { useContext, useEffect, useState } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ResultService from "../services/ResultService";
function ResultDownload({ setSpecificError }) {
  const [isLoading, setIsLoading] = useState(false);
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);
  useEffect(() => {
    console.log(`job id in result download component ${jobId}`);
  }, []);

  const downloadKML = (event) => {
    console.log(`at the start of downloadKML job id ${jobId}`);
    event.preventDefault();
    setIsLoading(true);
    const download = async () => {
      await ResultService.downloadKML(jobId, token);
      setSpecificError("");
      setIsLoading(false);
    };
    download().catch((error) => {
      console.error("downloadKML download Error:", error);
      setSpecificError(
        "Something went wrong while downloading KML file. Please try again later."
      );
      setIsLoading(false);
    });

    console.log(`at the end of downloadKML job id ${jobId}`);
  };

  return (
    <div>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && (
        <button className="btn btn-outline-secondary" onClick={downloadKML}>
          Download KML
        </button>
      )}
    </div>
  );
}

export default ResultDownload;

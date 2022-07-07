import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ResultService from "../services/ResultService";

const Report = ({ setSpecificError }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [htmlContent, setHTMLContent] = useState("");
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);

  useEffect(() => {
    console.log(`job id in report component ${jobId}`);
    const displayHTMLReport = async () => {
      setIsLoading(true);
      const myBlob = await ResultService.downloadHTMLReport(jobId, token);
      if (!myBlob) {
        console.error("displayHTMLReport no file contents from server");
        throw new Error("displayHTMLReport no file contents from server");
      }
      let myReader = new FileReader();
      myReader.addEventListener("loadend", function (e) {
        setHTMLContent(e.target.result);
      });
      myReader.readAsText(myBlob);
      setSpecificError("");
      setIsLoading(false);
    };
    displayHTMLReport().catch((error) => {
      console.error("displayHTMLReport Error:", error);
      setSpecificError(
        "Something went wrong while downloading report. Please try again later."
      );
      setIsLoading(false);
    });
  }, []);

  const renderReportHTMLMarkup = () => {
    return { __html: htmlContent };
  };

  return (
    <div>
      {isLoading && (
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="row">
          <div className="col-11">
            <div dangerouslySetInnerHTML={renderReportHTMLMarkup()}></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Report;

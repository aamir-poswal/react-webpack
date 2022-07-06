import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ResultService from "../services/ResultService";

const Report = (setSpecificError) => {
  const [htmlContent, setHTMLContent] = useState("");
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);

  useEffect(() => {
    console.log(`job id in report component ${jobId}`);
    const displayHTMLReport = async () => {
      const myBlob = await ResultService.downloadHTMLReport(jobId, token);
      if (!myBlob) {
        console.error("displayHTMLReport no file contents from server");
        return;
      }
      let myReader = new FileReader();
      myReader.addEventListener("loadend", function (e) {
        setHTMLContent(e.target.result);
      });
      myReader.readAsText(myBlob);
      setSpecificError("");
    };
    displayHTMLReport().catch((error) => {
      console.error("displayHTMLReport Error:", error);
      setSpecificError(error);
    });
  }, []);

  const renderReportHTMLMarkup = () => {
    return { __html: htmlContent };
  };

  return (
    <div className="row">
      <div className="col-11">
        <div dangerouslySetInnerHTML={renderReportHTMLMarkup()}></div>
      </div>
    </div>
  );
};
export default Report;

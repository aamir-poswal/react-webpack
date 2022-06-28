import React, { useState, useContext, useEffect, useRef } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ResultService from "../services/ResultService";

const Report = () => {
  let [htmlContent, setHTMLContent] = useState(true);
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);

  useEffect(() => {
    console.log(`job id in report component ${jobId}`);
    ResultService.downloadHTMLReport(jobId, token).then((myBlob) => {
      let myReader = new FileReader();
      myReader.addEventListener("loadend", function (e) {
        setHTMLContent(e.target.result);
      });
      myReader.readAsText(myBlob);
    });
  }, []);

  const renderReportHTMLMarkup = () => {
    return { __html: htmlContent };
  };

  return (
    <div>
      <div className="container fluid">
        <div className="row">
          <div className="col-11">
            <div dangerouslySetInnerHTML={renderReportHTMLMarkup()}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Report;

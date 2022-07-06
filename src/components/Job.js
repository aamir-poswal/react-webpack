import React, { useState, useContext } from "react";
import JobService from "../services/JobService";
import UserContext from "../UserContext";
function Job({
  setCurrentJobId,
  setExportToHTMLUserInput,
  setExportToKMLUserInput,
}) {
  const token = useContext(UserContext);
  const [exportToHTMLInput, setExportToHTMLInput] = useState(true);
  const [exportToKMLInput, setExportToKMLInput] = useState(true);

  const runJob = (event) => {
    event.preventDefault();
    console.log("at the start of runJob");

    // const runJob = async () => {
    //   var jobId = await JobService.submitJob(exportToHTMLInput, exportToKMLInput, token);
    //   setCurrentJobId(jobId);
    // };
    // runJob().catch((error) => {
    //   console.error("runJob Error:", error);
    // });

    setCurrentJobId(2278);
    console.log("at the end of runJob");
  };
  const setExportToHTMLOption = (event) => {
    console.log("setExportToHTMLOption", event.target.value);
    setExportToHTMLInput((exportToHTMLInput) => !exportToHTMLInput);
    setExportToHTMLUserInput(!exportToHTMLInput);
  };
  const setExportToKMLOption = (event) => {
    console.log("setExportToKMLOption", event.target.value);
    setExportToKMLInput((exportToKMLInput) => !exportToKMLInput);
    setExportToKMLUserInput(!exportToKMLInput);
  };
  return (
    <div className="row">
      <div className="col">
        <div className="form-check pt-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkboxExportToHTML"
            checked={exportToHTMLInput}
            onChange={setExportToHTMLOption}
          />
          <label className="form-check-label" htmlFor="checkboxExportToHTML">
            Export To HTML
          </label>
        </div>
        <div className="form-check pt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkboxExportToKML"
            checked={exportToKMLInput}
            onChange={setExportToKMLOption}
          />
          <label className="form-check-label" htmlFor="checkboxExportToKML">
            Export To KML
          </label>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="btn btn-light btn-outline-secondary"
            onClick={runJob}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job;

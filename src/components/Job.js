import React, { useState, useContext } from "react";
import JobService from "../services/JobService";
import UserContext from "../UserContext";
function Job({
  setCurrentJobId,
  setExportToHTMLUserInput,
  setExportToKMLUserInput,
}) {
  const token = useContext(UserContext);
  const [exportToHTML, setExportToHTML] = useState(true);
  const [exportToKML, setExportToKML] = useState(true);

  const runJob = (event) => {
    event.preventDefault();
    console.log("at the start of runJob");

    // const runJob = async () => {
    //   var jobId = await JobService.submitJob(exportToHTML, exportToKML, token);
    //   setCurrentJobId(jobId);
    // };
    // runJob().catch((error) => {
    //   console.error("runJob Error:", error);
    // });

    setCurrentJobId(2278);
    console.log("at the end of runJob");
  };
  const setExportToHTMLOption = (event) => {
    event.preventDefault();
    setExportToHTML(!exportToHTML);
    setExportToHTMLUserInput(exportToHTML);
  };
  const setExportToKMLOption = (event) => {
    event.preventDefault();
    setExportToKML(!exportToKML);
    setExportToKMLUserInput(exportToKML);
  };
  return (
    <div className="row">
      <div className="col">
        <div className="form-check pt-5">
          <input
            type="checkbox"
            className="form-check-input"
            id="checkboxExportToHTML"
            checked={exportToHTML}
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
            checked={exportToKML}
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

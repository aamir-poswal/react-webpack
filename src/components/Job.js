import React, { useState, useContext } from "react";
import JobService from "../services/JobService";
import UserContext from "../UserContext";
function Job({ setCurrentJobId }) {
  let [exportToHTML, setExportToHTML] = useState(true);
  let [exportToKML, setExportToKML] = useState(true);
  let [jobId, setJobId] = useState(null);
  const token = useContext(UserContext);
  const runJob = (event) => {
    event.preventDefault();
    console.log("at the start of runJob");
    // JobService.submitJob(exportToHTML, exportToKML, token).then((jobId) => {
    //   setJobId(jobId);
    //   setCurrentJobId(jobId);
    // });
    setJobId(2278);
    setCurrentJobId(2278);
    console.log("at the end of runJob");
  };
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col">
          <div className="form-check pt-5">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkboxExportToHTML"
              checked={exportToHTML}
              onChange={() => setExportToHTML(!exportToHTML)}
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
              onChange={() => setExportToKML(!exportToKML)}
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
    </div>
  );
}

export default Job;

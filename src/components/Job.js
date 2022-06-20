import React, { useState } from "react";
import JobService from "../services/JobService";
function Job() {
  var [exportToHTML, setExportToHTML] = useState(true);
  var [exportToKML, setExportToKML] = useState(true);
  var [jobId, setJobId] = useState(null);
  const runJob = (event) => {
    event.preventDefault();
    console.log("at the start of runJob");
    var jobId = JobService.submitJob(exportToHTML, exportToKML);
    setJobId(jobId);
    setTimeout(function () {
      JobService.getJobStatus(jobId);
    }, 5000);
    console.log("at the end of runJob");
  };
  return (
    <div className="container fluid">
      <div className="row">
        <div className="col pt-4">
          <div className="form-check">
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
        </div>
        <div className="col pt-4">
          <div className="form-check">
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
        </div>
        <div className="col pt-4">
          <button type="submit" className="btn btn-primary" onClick={runJob}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Job;

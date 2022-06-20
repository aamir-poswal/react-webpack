import React, { useState } from "react";

function Job() {
  var [exportToHTML, setExportToHTML] = useState(true);
  var [exportToKML, setExportToKML] = useState(true);

  return (
    <div className="container fluid">
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
      <div className="pt-2">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Job;

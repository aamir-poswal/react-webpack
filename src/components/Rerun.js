import React from "react";

function Rerun({
  setCurrentJobId,
  setExportToHTMLUserInput,
  setExportToKMLUserInput,
}) {
  const rerunJob = (event) => {
    event.preventDefault();
    console.log("at the start of rerunJob");
    setCurrentJobId("");
    setExportToHTMLUserInput(true);
    setExportToKMLUserInput(true);
    console.log("at the end of rerunJob");
  };
  return (
    <button className="btn btn-outline-secondary" onClick={rerunJob}>
      Re-run
    </button>
  );
}

export default Rerun;

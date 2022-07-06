import React from "react";

function Rerun({ setCurrentJobId }) {
  const rerunJob = (event) => {
    event.preventDefault();
    console.log("at the start of rerunJob");
    setCurrentJobId("");
    console.log("at the end of rerunJob");
  };
  return (
    <button className="btn btn-outline-secondary" onClick={rerunJob}>
      Re-run
    </button>
  );
}

export default Rerun;

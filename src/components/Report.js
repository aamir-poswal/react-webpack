import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ReactDOM from "react-dom";
const Report = () => {
  const user = useContext(UserContext);
  const jobId = useContext(JobContext);
  useEffect(() => {
    console.log(`job id in report component ${jobId}`);
  }, []);
  return (
    <div>
      <div className="row row-action-height">
        <p>html report</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};
export default Report;

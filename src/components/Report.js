import React, { useState, useContext, useEffect } from "react";
import UserContext from "../UserContext";
import JobContext from "../JobContext";
import ReactDOM from "react-dom";
const Report = () => {
  const token = useContext(UserContext);
  const jobId = useContext(JobContext);
  useEffect(() => {
    console.log(`job id in report component ${jobId}`);
  }, []);
  return (
    <div>
      <div className="container fluid">
        <div className="row">
          <p>html report</p>
        </div>
      </div>
    </div>
  );
};
export default Report;

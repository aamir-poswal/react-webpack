import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import userService from "./services/userService";
import Job from "./components/Job";
import ResultDownload from "./components/ResultDownload";

export function App() {
  var [token, setToken] = useState("");
  const [jobId, setJobId] = useState(null);
  var [isJobSumitted, setIsJobSubmitted] = useState(false);
  const setCurrentJobId = (currentJobId) => {
    setJobId(currentJobId);
    console.log("setCurrentJobId: " + currentJobId);
  };
  useEffect(() => {
    var token = userService.loginToFMEServer();
    setToken(token);
  }, []);
  return (
    <div>
      <UserContext.Provider value={token}>
        <div className="container fluid">
          <div>
            {!isJobSumitted && <Job setCurrentJobId={setCurrentJobId}></Job>}
            {isJobSumitted && <ResultDownload></ResultDownload>}
            {isJobSumitted && <Report></Report>}
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

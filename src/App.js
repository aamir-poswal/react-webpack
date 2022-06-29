import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import userService from "./services/UserService";
import Job from "./components/Job";
import ResultDownload from "./components/ResultDownload";
import JobContext from "./JobContext";

export function App() {
  const [token, setToken] = useState("");
  const [jobId, setJobId] = useState(null);
  const setCurrentJobId = (currentJobId) => {
    setJobId(currentJobId);
    console.log("setCurrentJobId: " + currentJobId);
  };
  useEffect(() => {
    userService.loginToFMEServer().then((token) => {
      setToken(token);
    });
  }, []);
  return (
    <div>
      {token && (
        <div>
          <UserContext.Provider value={token}>
            <div className="container fluid">
              <div>
                {!jobId && <Job setCurrentJobId={setCurrentJobId}></Job>}
              </div>
              <JobContext.Provider value={jobId}>
                <div>
                  {jobId && <ResultDownload></ResultDownload>}
                  {jobId && <Report></Report>}
                </div>
              </JobContext.Provider>
            </div>
          </UserContext.Provider>
        </div>
      )}
    </div>
  );
}

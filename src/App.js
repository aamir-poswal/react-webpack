import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import UserService from "./services/UserService";
import Job from "./components/Job";
import ResultDownload from "./components/ResultDownload";
import JobContext from "./JobContext";
import "./Styles/App.scss";

const App = () => {
  const [token, setToken] = useState("");
  const [jobId, setJobId] = useState(null);
  const setCurrentJobId = (currentJobId) => {
    setJobId(currentJobId);
    console.log("setCurrentJobId: " + currentJobId);
  };
  useEffect(() => {
    const login = async () => {
      var token = await UserService.loginToFMEServer();
      setToken(token);
    };
    login().catch((error) => {
      console.error("login Error:", error);
    });
  }, []);

  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
};
export default App;

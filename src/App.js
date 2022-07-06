import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import UserService from "./services/UserService";
import Job from "./components/Job";
import Rerun from "./components/Rerun";
import ResultDownload from "./components/ResultDownload";
import JobContext from "./JobContext";

export function App() {
  const [token, setToken] = useState("");
  const [jobId, setJobId] = useState("");
  const [exportToHTML, setExportToHTML] = useState(true);
  const [exportToKML, setExportToKML] = useState(true);

  const setCurrentJobId = (currentJobId) => {
    setJobId(currentJobId);
    console.log("setCurrentJobId: " + currentJobId);
  };
  const setExportToHTMLUserInput = (currentExportToHTMLUserInput) => {
    setExportToHTML(currentExportToHTMLUserInput);
    console.log("setExportToHTMLUserInput: " + currentExportToHTMLUserInput);
  };
  const setExportToKMLUserInput = (currentExportToKMLUserInput) => {
    setExportToKML(currentExportToKMLUserInput);
    console.log("setExportToKMLUserInput: " + currentExportToKMLUserInput);
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
                  {!jobId && (
                    <Job
                      setCurrentJobId={setCurrentJobId}
                      setExportToHTMLUserInput={setExportToHTMLUserInput}
                      setExportToKMLUserInput={setExportToKMLUserInput}
                    ></Job>
                  )}
                </div>
                <JobContext.Provider value={jobId}>
                  <div>
                    {jobId && (
                      <div className="row">
                        <div className="pt-4 pb-2 col-lg-3 col-md-4 col-sm-5 col-xs-4">
                          <Rerun
                            setCurrentJobId={setCurrentJobId}
                            setExportToHTMLUserInput={setExportToHTMLUserInput}
                            setExportToKMLUserInput={setExportToKMLUserInput}
                          ></Rerun>
                        </div>
                        <div className="pt-4 pb-2 col-lg-3 col-md-4 col-sm-6 col-xs-7 offset-lg-6 offset-md-4 offset-sm-1 offset-xs-1">
                          {exportToKML && <ResultDownload></ResultDownload>}
                        </div>
                      </div>
                    )}
                    {jobId && exportToHTML && <Report></Report>}
                  </div>
                </JobContext.Provider>
              </div>
            </UserContext.Provider>
          </div>
        )}
      </div>
    </React.StrictMode>
  );
}

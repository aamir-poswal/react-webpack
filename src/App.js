import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import UserService from "./services/UserService";
import Job from "./components/Job";
import Rerun from "./components/Rerun";
import ResultDownload from "./components/ResultDownload";
import JobContext from "./JobContext";
import "./Styles/App.scss";

const App = () => {
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [jobId, setJobId] = useState("");
  const [exportToHTML, setExportToHTML] = useState(true);
  const [exportToKML, setExportToKML] = useState(true);

  const setCurrentJobId = (currentJobId) => {
    console.log("setCurrentJobId: " + currentJobId);
    setJobId(currentJobId);
  };
  const setSpecificError = (specificError) => {
    console.log("setSpecificError: " + specificError);
    setError(specificError);
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
      setError("");
    };
    login().catch((error) => {
      console.error("login Error:", error);
      setError(
        "Something went wrong while authenticating the request. Please try again later."
      );
    });
  }, []);

  return (
    <React.StrictMode>
      <div className="container fluid">
        {error && (
          <div className="row">
            <div className="col pt-2">
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            </div>
          </div>
        )}
        <div>
          {!error && token && (
            <div>
              <UserContext.Provider value={token}>
                <div>
                  <div>
                    {!jobId && (
                      <Job
                        setCurrentJobId={setCurrentJobId}
                        setExportToHTMLUserInput={setExportToHTMLUserInput}
                        setExportToKMLUserInput={setExportToKMLUserInput}
                        setSpecificError={setSpecificError}
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
                              setExportToHTMLUserInput={
                                setExportToHTMLUserInput
                              }
                              setExportToKMLUserInput={setExportToKMLUserInput}
                            ></Rerun>
                          </div>
                          <div className="pt-4 pb-2 col-lg-3 col-md-4 col-sm-6 col-xs-7 offset-lg-6 offset-md-4 offset-sm-1 offset-xs-1">
                            {exportToKML && (
                              <ResultDownload
                                setSpecificError={setSpecificError}
                              ></ResultDownload>
                            )}
                          </div>
                        </div>
                      )}
                      {jobId && exportToHTML && (
                        <Report setSpecificError={setSpecificError}></Report>
                      )}
                    </div>
                  </JobContext.Provider>
                </div>
              </UserContext.Provider>
            </div>
          )}
        </div>
      </div>
    </React.StrictMode>
  );
};
export default App;

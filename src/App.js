import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import userService from "./services/userService";
import Job from "./components/Job";
import ResultDownload from "./components/ResultDownload";

export function App() {
  var [token, setToken] = useState("");
  var [isJobSumitted, setIsJobSubmitted] = useState(false);
  useEffect(() => {
    var token = userService.loginToFMEServer();
    setToken(token);
  }, []);
  return (
    <div>
      <UserContext.Provider value={token}>
        <div className="container fluid">
          <div>
            {!isJobSumitted && <Job></Job>}
            {isJobSumitted && <ResultDownload></ResultDownload>}
            {isJobSumitted && <Report></Report>}
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

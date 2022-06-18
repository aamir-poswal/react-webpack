import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import config from "./environments/TestEnvironmentConfig";
import userService from "./services/userService";
export function App() {
  const [testKey, settestkey] = useState("");
  useEffect(() => {
    settestkey(config.REACT_APP_TEST_KEY);
    userService.pingFMEServer();
  }, []);
  return (
    <div>
      <div className="container">
        <div>
          <div className="row row-action-height">
            <button className="button-23">Download KML</button>
          </div>
          <Report></Report>
        </div>
      </div>
    </div>
  );
}

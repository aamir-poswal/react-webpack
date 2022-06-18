import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import config from "./environments/TestEnvironmentConfig";
import userService from "./services/userService";
export function App() {
  useEffect(() => {
    userService.loginToFMEServer();
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

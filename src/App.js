import React, { useEffect, useState } from "react";
import config from "./environments/environment.test.config";
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
        <div className="row row-action-height">
          <button className="button-23">Download KML</button>
        </div>
        <div className="row row-content-height">
          <p>these are contents {testKey}</p>
        </div>
      </div>
    </div>
  );
}

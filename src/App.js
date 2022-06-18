import React, { useEffect, useState } from "react";
import config from "./environments/environment.test.config";
export function App() {
  const [testKey, settestkey] = useState("");
  useEffect(() => {
    settestkey();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row row-action-height">
          <button className="button-23">Download KML</button>
        </div>
        <div className="row row-content-height">
          <p>these are contents {config.REACT_APP_TEST_KEY}</p>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Report from "./components/Report";
import UserContext from "./UserContext";
import userService from "./services/userService";

export function App() {
  var [token, setToken] = useState("");
  useEffect(() => {
    var token = userService.loginToFMEServer();
    setToken(token);
  }, []);
  return (
    <div>
      <div className="container">
        <div>
          <div className="row row-action-height">
            <button className="button-23">Download KML {token}</button>
          </div>
          <Report></Report>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import UserContext from "../UserContext";
import ReactDOM from "react-dom";
const Report = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <div className="row row-action-height">
        <p>html report</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};
export default Report;

import React, { useEffect } from "react";
import FetchAllEmails from "./utils/FetchAllEmails";

function MainApp() {
  useEffect(() => {
    FetchAllEmails("omihridesh@gmail.com", 100);
  });
  return (
    <div>
      <div></div>
    </div>
  );
}

export default MainApp;

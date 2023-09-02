import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    $("#fullpage").fullpage({
      scrollOverflow: true,
    });
  }, []);

  return (
    <div id="fullpage">
      <div className="section fp-scrollable">second page</div>
      <div className="section">
        <div style={{ height: "200vh" }}>first page</div>
      </div>
      <div className="section">third page</div>
    </div>
  );
}

export default App;

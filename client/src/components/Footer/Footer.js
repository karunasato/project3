import React from "react";


function Footer() {
  return (
    <div>
      <footer
        style={{
          position: "fixed",
          backgroundColor: "clear",
          color: "white",
          bottom: "0",
          left: "0",
          width: "100%",
          flexShrink: "0",


          marginTop: "250px",
          marginBottom: "0",

          textAlign: "center"
        }}
      >
        <div className="footer-container">
          <span id="copyright">
            &copy; {new Date().getFullYear()}
            &nbsp;COPYRIGHT{" "}
          </span>
         
        </div>
      </footer>
    </div>
  );
}
export default Footer;

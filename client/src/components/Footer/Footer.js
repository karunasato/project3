import React from "react";


function Footer() {
  return (
    <div>
      <footer
        style={{
          position: "fixed",
          backgroundColor: "black",
          color: "white",
          bottom: "0",
          left: "0",
          width: "100%",
          flexShrink: "0",
          padding:"25px",
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

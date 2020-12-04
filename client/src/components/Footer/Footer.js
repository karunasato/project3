import React from "react";


function Footer() {
  return (
    <div>
      <footer
        style={{
          position: "relative",
          height: "300px",
          backgroundColor: "#5B9098",
          color: "white",
          padding: "30px",
          bottom: "0",
          left: "0",
          width: "100%",
          flexShrink: "0",
          marginTop: "346px",
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

import React from "react";
import "./styles.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="footer-div">
      <p className="footer-paragraph">Made by Damián Pérez</p>
      <FontAwesomeIcon icon={faCode} />
    </div>
  );
}
export default Footer;

import React from "react";
// import myResume from "../../resume/CV_Lovelyo_Yeremia_Mokalu.pdf";
import { FooterStyles, FooterWrapper } from "./FooterStyles";
// import jsPDF from "jspdf";
import {
  FcOpenedFolder,
  FcPrint,
  FcBusinessman,
  FcGoogle,
  FcBinoculars,
} from "react-icons/fc";
import ReactTooltip from "react-tooltip";

function Footer() {
  // const pdfGenerate = () => {
  //   var doc = new jsPDF("potrait", "px", "a4", "false");
  //   // doc.
  // };
  return (
    <FooterStyles>
      <FooterWrapper>
        <ReactTooltip type="info" />
        <FcBusinessman data-tip="Who am i" className="icon-footer" />
        <FcBinoculars data-tip="Quick view projects" className="icon-footer" />
        <FcOpenedFolder data-tip="My Gallery" className="icon-footer" />
        <FcGoogle data-tip="Send an Email" className="icon-footer" />
        <FcPrint data-tip="Download my resume" className="icon-footer" />
      </FooterWrapper>
    </FooterStyles>
  );
}

export default Footer;

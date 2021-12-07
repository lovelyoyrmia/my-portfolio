import React from "react";
import { FooterStyles, FooterWrapper } from "./FooterStyles";
import {
  FcOpenedFolder,
  FcPrint,
  FcBusinessman,
  FcGoogle,
  FcBinoculars,
} from "react-icons/fc";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

function Footer() {
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

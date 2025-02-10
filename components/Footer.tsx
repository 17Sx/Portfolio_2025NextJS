import React, { useRef } from "react";
import Contact from "@/components/Contact";
import FooterContent from "@/components/FooterContent";
import Link from "next/link";

const Footer = () => {
  return (
	<footer id="footer" className="footer">
    <div className="top-footer">
        <FooterContent/>
	    <Contact />
    </div>
        <p>All rights reserved <Link className="username" href="/">@17Sx</Link></p>
	</footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FooterContent = () => {
  return (
    <div className="footer-content">
      <div className="footer-content-left">
        <h2 className="contact-title">Let&apos;s Connect</h2>
        <p>
          Feel free to contact me for any project or collaboration. I am always open to discussing new ideas, creative projects, or opportunities to be part of your visions. Let&apos;s work together to create something amazing!
        </p>
        <div className="social-links">
            <h3>Take a look at my social media</h3>
            <div className="social-icons">
                <Link href="https://www.linkedin.com/in/noa-obringer-3a2793291/" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/linkedin.png" alt="LinkedIn Profile" width={48} height={48} />
                </Link>
                <Link href="https://github.com/17Sx" target="_blank" rel="noopener noreferrer">
                    <Image src="/img/github.png" alt="Github Profile" width={48} height={48} />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;

"use client";
 
import Link from "next/link";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className={"header"}>
        <div className={"logo"}>
            <img src="img/Logo.png" alt="" />
            <div className={"logo-text"}>
                <div>
                    <h1>NOA OBRINGER.</h1>
                    <div className="p-container">
                        <p data-text="Let's collaborate!">Up to work!</p>
                    </div>
                </div>
            </div>
        </div>

        <div 
            className={`theme-switch ${isDark ? 'dark' : 'light'}`} 
            onClick={toggleTheme}
        >
            {isDark ? (
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0234 2.5C12.4377 2.5 12.7734 2.83579 12.7734 3.25V4.75C12.7734 5.16421 12.4377 5.5 12.0234 5.5C11.6092 5.5 11.2734 5.16421 11.2734 4.75V3.25C11.2734 2.83579 11.6092 2.5 12.0234 2.5Z" fill="currentColor"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.52344 12.5C6.52344 9.46243 8.98587 7 12.0234 7C15.061 7 17.5234 9.46243 17.5234 12.5C17.5234 15.5376 15.061 18 12.0234 18C8.98587 18 6.52344 15.5376 6.52344 12.5ZM12.0234 8.5C9.8143 8.5 8.02344 10.2909 8.02344 12.5C8.02344 14.7091 9.8143 16.5 12.0234 16.5C14.2326 16.5 16.0234 14.7091 16.0234 12.5C16.0234 10.2909 14.2326 8.5 12.0234 8.5Z" fill="currentColor"/>
                            <path d="M19.0948 6.49127C19.3877 6.19837 19.3877 5.7235 19.0948 5.43061C18.8019 5.13771 18.327 5.13771 18.0341 5.43061L16.9735 6.49127C16.6806 6.78416 16.6806 7.25903 16.9735 7.55193C17.2664 7.84482 17.7412 7.84482 18.0341 7.55193L19.0948 6.49127Z" fill="currentColor"/>
                            <path d="M22.0234 12.5C22.0234 12.9142 21.6877 13.25 21.2734 13.25H19.7734C19.3592 13.25 19.0234 12.9142 19.0234 12.5C19.0234 12.0858 19.3592 11.75 19.7734 11.75H21.2734C21.6877 11.75 22.0234 12.0858 22.0234 12.5Z" fill="currentColor"/>
                            <path d="M18.0341 19.5694C18.327 19.8623 18.8019 19.8623 19.0948 19.5694C19.3877 19.2765 19.3877 18.8016 19.0948 18.5087L18.0341 17.4481C17.7412 17.1552 17.2664 17.1552 16.9735 17.4481C16.6806 17.741 16.6806 18.2158 16.9735 18.5087L18.0341 19.5694Z" fill="currentColor"/>
                            <path d="M12.0234 19.5C12.4377 19.5 12.7734 19.8358 12.7734 20.25V21.75C12.7734 22.1642 12.4377 22.5 12.0234 22.5C11.6092 22.5 11.2734 22.1642 11.2734 21.75V20.25C11.2734 19.8358 11.6092 19.5 12.0234 19.5Z" fill="currentColor"/>
                            <path d="M7.0733 18.5147C7.36619 18.2218 7.36619 17.7469 7.0733 17.454C6.78041 17.1612 6.30553 17.1612 6.01264 17.454L4.95198 18.5147C4.65909 18.8076 4.65909 19.2825 4.95198 19.5754C5.24487 19.8683 5.71975 19.8683 6.01264 19.5754L7.0733 18.5147Z" fill="currentColor"/>
                            <path d="M5.02344 12.5C5.02344 12.9142 4.68765 13.25 4.27344 13.25H2.77344C2.35922 13.25 2.02344 12.9142 2.02344 12.5C2.02344 12.0858 2.35922 11.75 2.77344 11.75H4.27344C4.68765 11.75 5.02344 12.0858 5.02344 12.5Z" fill="currentColor"/>
                            <path d="M6.01264 7.54596C6.30553 7.83885 6.78041 7.83885 7.0733 7.54596C7.36619 7.25306 7.36619 6.77819 7.0733 6.4853L6.01264 5.42463C5.71975 5.13174 5.24487 5.13174 4.95198 5.42463C4.65909 5.71753 4.65909 6.1924 4.95198 6.48529L6.01264 7.54596Z" fill="currentColor"/>
                        </svg>
                        ) : (
                        <FontAwesomeIcon icon={faMoon} />
                        )}

        </div>

        <div className={"nav-links"}>
    <ul>
        <li>
            <Link href="/" className={"header-button"} data-text="Welcome"> 
                <span>01</span> Home
            </Link>
        </li>
        <li>
            <Link href="#about" className={"header-button"} data-text="Who am I?"> 
                <span>02</span> About
            </Link>
        </li>
        <li>
            <Link href="#projects" className={"header-button"} data-text="My Work"> 
                <span>03</span> Projects
            </Link>
        </li>
        <li>
            <Link href="#contact" className={"header-button"} data-text="Let's Talk"> 
                <span>04</span> Contact
            </Link>
        </li>
    </ul>
</div>

    </nav>
  );
}

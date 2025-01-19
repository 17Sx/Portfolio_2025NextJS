"use client";
 
import Link from "next/link";
export default function Header() {
 
  return (
    <nav className={"header"}>
        <div className={"logo"}>
            <img src="img/Logo.png" alt="" />
            <div className={"logo-text"}>
                <div>
                <h1>NOA OBRINGER.</h1>
                <p>Up to work!</p>
                </div>
            </div>
        </div>

        <div className={"nav-links"}>
            <ul>
                <li>
                    <Link href="/" className={"home header-button"}> <span>01</span> Home</Link>
                </li>
                <li>
                    <Link href="#about" className={"about header-button"}> <span>02</span> About</Link>
                </li>
                <li>
                    <Link href="#projects" className={"projects header-button"}> <span>03</span> Projects</Link>
                </li>
                <li>
                    <Link href="#contact" className={"contact header-button"}> <span>04</span> Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}
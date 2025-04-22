"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Darkmode from "./Darkmode";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>About</Link>
        <Link href="/projects" className={`nav-link ${pathname === "/projects" ? "active" : ""}`}>Projects</Link>
        <Link href="/experiences" className={`nav-link ${pathname === "/experiences" ? "active" : ""}`}>Experiences</Link>
        <Link href="/contactMe" className={`nav-link ${pathname === "/contactMe" ? "active" : ""}`}>Contact</Link>
        <Darkmode />
      </div>
    </nav>
  );
}

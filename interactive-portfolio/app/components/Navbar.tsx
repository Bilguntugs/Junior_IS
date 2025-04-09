"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" aria-label="Home">My Portfolio</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-400" aria-label="Home">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-400" aria-label="About">About</Link></li>
          <li><Link href="/projects" className="hover:text-gray-400" aria-label="Projects">Projects</Link></li>
          <li><Link href="/skills" className="hover:text-gray-400" aria-label="Skills">Skills</Link></li>
          <li><Link href="/contactMe" className="hover:text-gray-400" aria-label="Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

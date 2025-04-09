"use client";
import Link from "next/link";
import Darkmode from "./Darkmode";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white dark:bg-gray-800 dark:text-white py-4 px-6 fixed w-full z-10 shadow-md transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold no-underline">
          My Portfolio
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white no-underline hover:text-blue-300 dark:hover:text-yellow-300 transition-colors">Home</Link>
          <Link href="/about" className="text-white no-underline hover:text-blue-300 dark:hover:text-yellow-300 transition-colors">About</Link>
          <Link href="/projects" className="text-white no-underline hover:text-blue-300 dark:hover:text-yellow-300 transition-colors">Projects</Link>
          <Link href="/experiences" className="text-white no-underline hover:text-blue-300 dark:hover:text-yellow-300 transition-colors">Experiences</Link>
          <Link href="/contactMe" className="text-white no-underline hover:text-blue-300 dark:hover:text-yellow-300 transition-colors">Contact</Link>
          <Darkmode />
        </div>
      </div>
    </nav>
  );
}

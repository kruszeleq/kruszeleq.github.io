"use client";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Buttons from "./buttons";

export default function Navbar() {
  return (
    <nav className="flex z-10 bg-[#121212] top-0 left-0 right-0 h-[100px] font-semibold w-full items-center px-6 md:px-8 justify-center">
      <div className="flex mx-auto mt-[0.08em]">
        <Link
          href="/"
          className="self-center text-lg font-semibold transition-colors whitespace-nowrap text-[#ff7070] hover:text-red-100 fadein-bot"
          prefetch={false}
        >
          itzkrofi
        </Link>
      </div>
      <div className="mx-auto inline-block text-sm">
        <nav className="hidden items-center gap-6 md:flex space-x-3">
          <Buttons href="/" text="Główna" />
          <Buttons href="/about" text="O mnie" />
          <Buttons href="/projects" text="Projekty" />
        </nav>
      </div>
      <div className="mx-auto">
        <div className="flex items-center gap-4 mt-[0.08em]">
          <Link
            href="https://discord.com/users/813435252776501308"
            className="fadein-bot text-muted-foreground transition-colors ease-in-out duration-300 hover:text-[#fff]"
            prefetch={false}
          >
            <FaDiscord className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
          <Link
            href="https://github.com/kruszeleq"
            className="fadein-bot text-muted-foreground transition-colors ease-in-out duration-300 hover:text-[#fff]"
            prefetch={false}
          >
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

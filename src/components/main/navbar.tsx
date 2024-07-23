"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const currentPath = usePathname();
  return (
    <nav className="flex z-10 fixed backdrop-blur-md top-0 left-0 right-0 h-[100px] font-semibold w-full items-center px-6 md:px-8 justify-center">
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
          <Link
            href="/"
            className={cn(
              currentPath === "/" ? "router-active" : "router-noactive",
              "fadein-bot"
            )}
            prefetch={false}
          >
            Główna
          </Link>
          <Link
            href="/about"
            className={cn(
              currentPath === "/about" ? "router-active" : "router-noactive",
              "fadein-bot"
            )}
            prefetch={false}
          >
            O mnie
          </Link>
          <Link
            href="/projects"
            className={cn(
              currentPath === "/projects" ? "router-active" : "router-noactive",
              "fadein-bot"
            )}
            prefetch={false}
          >
            Projekty
          </Link>
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

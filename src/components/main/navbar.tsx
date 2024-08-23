"use client";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Buttons from "./buttons";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    {
      href: "/",
      text: "Główna",
    },
    {
      href: "/about",
      text: "O mnie",
    },
    {
      href: "/projects",
      text: "Projekty",
    },
  ];

  const socials = [
    {
      href: "https://discord.com/users/813435252776501308",
      icon: <FaDiscord className="h-5 w-5" />,
    },
    {
      href: "https://github.com/kruszeleq",
      icon: <FaGithub className="h-5 w-5" />,
    },
  ];
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
        <div className="hidden items-center gap-6 md:flex space-x-3">
          {navItems.map((item, i) => {
            return <Buttons key={i} href={item.href} text={item.text} />;
          })}
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex items-center gap-4 mt-[0.08em]">
          {socials.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.href}
                className="fadein-bot text-muted-foreground transition-colors ease-in-out duration-300 hover:text-[#fff]"
                prefetch={false}
              >
                {item.icon}
              </Link>
            );
          })}
          <div
            onClick={handleNav}
            className="block md:hidden text-muted-foreground"
          >
            {nav ? (
              <AiOutlineClose className="w-5 h-5" />
            ) : (
              <AiOutlineMenu className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
      <div
        className={cn(
          nav
            ? "fixed md:hidden bottom-0 left-0 h-[10%] w-full border-t border-t-red-400 bg-red-400/10 backdrop-blur-xl ease-in-out duration-500"
            : "ease-in-out h-[10%] duration-1000 fixed left-0 right-0 bottom-[-100%]",
          "z-10"
        )}
      >
        <div className="flex justify-center h-full items-center text-center space-x-6 text-white">
          {navItems.map((item, i) => {
            return (
              <Link
                key={i}
                href={item.href}
                className="text-nowrap border border-red-400 py-2 w-1/5 text-center bg-red-400 bg-opacity-10 rounded-3xl"
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

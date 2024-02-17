"use client";
import { Button } from "@/components/ui/button";
import { FaGithub, FaDiscord, FaHome, FaList } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";
import { ModeToggle } from "./ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="container mx-auto flex flex-wrap flex-row justify-center items-center border-b-2 py-5 text-secondary-foreground">
        <div className="space-x-2 mr-auto hidden md:flex">
          <Button size="icon" variant="outline" asChild>
            <a href="/">
              <FaHome className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/">
              <PiBagFill className="mr-2 w-4 h-4" />
              Portfolio
            </a>
          </Button>
        </div>
        <div className="mx-auto">
          <h1 className="bg-gradient-to-r from-zinc-300  to-zinc-700 bg-clip-text text-transparent font-extrabold text-3xl md:mr-[2rem] -mr-[5rem]">
            itzkrofi
          </h1>
        </div>
        <div className="space-x-2 ml-auto hidden md:flex">
          <Button size="icon" variant="outline" asChild>
            <a href="https://github.com/kruszeleq">
              <FaGithub className="h-4 w-4" />
            </a>
          </Button>
          <Button size="icon" variant="outline" asChild>
            <a href="#">
              <FaDiscord className="h-4 w-4" />
            </a>
          </Button>
          <ModeToggle />
        </div>
        <div className="md:hidden space-x-2 flex">
          <ModeToggle />
          <Button size="icon" variant="outline" onClick={toggleNavbar}>
            {isOpen ? (
              <MdClose size={50} className="h-4 w-4" />
            ) : (
              <FaList className="h-4 w-4" />
            )}
          </Button>
        </div>
        {isOpen && (
          <div className="flex basis-full flex-col items-center mt-10 space-y-3 border-t-2 py-10">
            <Button variant="outline" asChild className="w-full">
              <a href="/">
                <FaHome className="w-4 h-4 mr-2" />
                Strona główna
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="/">
                <PiBagFill className="mr-2 w-4 h-4" />
                Portfolio
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="https://github.com/kruszeleq">
                <FaGithub className="h-4 w-4 mr-2" />
                Github
              </a>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <a href="/">
                <FaDiscord className="h-4 w-4 mr-2" />
                Discord
              </a>
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

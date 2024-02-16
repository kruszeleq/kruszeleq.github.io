"use client";
import { Button } from "@/components/ui/button";
import { FaGithub, FaDiscord, FaHome } from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { ModeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between items-center border-b-2 py-5 text-secondary-foreground">
      <div className="space-x-5">
        <div className="space-x-3">
          <Button size="icon" variant="outline" asChild>
            <a href="/">
              <FaHome className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline">
            <PiBagFill className="mr-2 w-4 h-4" />
            Portfolio
          </Button>
        </div>
      </div>
      <div>
        <h1 className="bg-gradient-to-r from-zinc-300  to-zinc-800 bg-clip-text text-transparent font-extrabold text-3xl">
          itzkrofi
        </h1>
      </div>
      <div className="space-x-2">
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
    </div>
  );
};

export default Navbar;

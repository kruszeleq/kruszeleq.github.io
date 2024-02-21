"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ButtonComponent from "@/components/HomePage/ButtonComponent";
import { ModeToggle } from "./ThemeToggle";

import { FaGithub, FaDiscord, FaHome, FaList } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import { MdClose } from "react-icons/md";
import { PiBagFill } from "react-icons/pi";

import { useEffect, useState } from "react";
import LanguageChanger from "./LanguageChanger";

interface Props {
  locale: string;
}

const namespaces = ["navbar"];

const Navbar = ({ locale }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      <div className="flex basis-full flex-col items-center mt-10 space-y-3 border-t-2 py-10">
        <ButtonComponent
          icon={FaHome}
          href="/"
          text="Strona główna"
          class="w-full"
          namespaces={namespaces}
          path="homeButton"
          locale={locale}
        />
        <ButtonComponent
          icon={PiBagFill}
          href="/portfolio"
          text="Portfolio"
          class="w-full"
          namespaces={namespaces}
          path="portfolioButton"
          locale={locale}
        />
        <ButtonComponent
          icon={FaPhone}
          href="#"
          text="Kontakt"
          class="w-full"
          namespaces={namespaces}
          path="contactButton"
          locale={locale}
        />
        <ButtonComponent
          icon={FaGithub}
          href="https://github.com/kruszeleq"
          text="Github"
          class="w-full"
        />
        <ButtonComponent
          icon={FaDiscord}
          href="https://discord.com/users/813435252776501308"
          text="Discord"
          class="w-full"
        />
      </div>;
    }
  }, [isOpen]);

  return (
    <>
      <div className="bg-stone-50 dark:bg-stone-950 px-10 mx-auto flex flex-wrap flex-row justify-center items-center border-b-2 py-5 text-secondary-foreground">
        <div className="space-x-2 mr-auto hidden md:flex">
          <ButtonComponent icon={FaHome} href="/" isIcon />
          <ButtonComponent
            icon={PiBagFill}
            href="/portfolio"
            text="Portfolio"
            namespaces={namespaces}
            path="portfolioButton"
            locale={locale}
          />
          <ButtonComponent
            icon={FaPhone}
            href="#"
            text="Kontakt"
            namespaces={namespaces}
            path="contactButton"
            locale={locale}
          />
        </div>
        <div className="mx-auto">
          <h1 className="bg-gradient-to-r from-zinc-300  to-zinc-700 bg-clip-text text-transparent font-extrabold text-3xl md:mr-[5.5rem] -mr-[5.5rem]">
            itzkrofi
          </h1>
        </div>
        <div className="space-x-2 ml-auto hidden md:flex">
          <ButtonComponent
            icon={FaGithub}
            href="https://github.com/kruszeleq"
            isIcon
          />
          <ButtonComponent
            icon={FaDiscord}
            href="https://discord.com/users/813435252776501308"
            isIcon
          />

          <Separator orientation="vertical" className="h-10" />

          <LanguageChanger />

          <ModeToggle locale={locale} namespaces={["themetoggle"]} />
        </div>
        <div className="md:hidden space-x-2 flex">
          <ModeToggle locale={locale} namespaces={["themetoggle"]} />
          <Button size="icon" variant="outline" onClick={toggleNavbar}>
            {isOpen ? (
              <MdClose size={50} className="h-4 w-4" />
            ) : (
              <FaList className="h-4 w-4" />
            )}
          </Button>
        </div>
        {/* {isOpen && (
          <h1>sigma</h1>
        )} */}
      </div>
    </>
  );
};

export default Navbar;

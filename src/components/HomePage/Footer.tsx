import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <footer className="bg-stone-50 fixed bottom-0 dark:bg-stone-950 w-[70%] rounded-lg shadow border m-4 mx-10">
          <div className="w-full mx-auto max-w-screen-xl p-4 space-y-5 md:space-y-0 md:flex md:items-center md:justify-between">
            <span className="text-sm text-black sm:text-center dark:text-white">
              © 2024 itzkrofi. Wszystkie prawa zastrzeżone
            </span>
            <div className="hidden md:flex flex-wrap items-center mt-3 text-sm font-medium text-black dark:text-white sm:mt-0 space-x-2">
              <Button variant="outline">
                <a href="#">Portfolio</a>
              </Button>
              <Button variant="outline">
                <a href="#">Kontakt</a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;

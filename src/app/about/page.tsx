import Image from "next/image";
import Config from "../app.config";
import { TechStackCard } from "@/components/about/techStackCard";
import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { FaNpm } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const page = () => {
  return (
    <main className="mt-[50px] max-w-7xl w-full m-auto">
      <div className="px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] bg-[#1e1e1f] rounded-3xl text-white mx-3 mb-5 overflow-hidden">
        <header>
          <div className="text-2xl font-bold text-white mb-5 justify-center fadein-bot title-section flex items-center">
            <div className="h-[1px] w-16 bg-red-400 md:w-48"></div>&nbsp; O mnie
            &nbsp;
            <div className="h-[1px] w-16 bg-red-400 md:w-48"></div>
          </div>
        </header>
        <section className="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
          <div className="flex justify-center">
            <Image
              alt="avatar"
              fetchPriority="high"
              width={300}
              height={300}
              className="w-5/12 md:w-8/12 rounded-full mb-3 fadein-up border-4 border-red-400 shadow-[0_0_73px_-9px_rgba(255,112,112,.44)]"
              src={Config.avatarURL}
            ></Image>
          </div>
          <div className="md:w-7/12">
            <p className="mb-3 md:mb-7 fadein-left fadeins-1">
              ⠀⠀⠀⠀⠀Cześć wszystkim! Nazywam się itzkrofi. Jestem osobą, która
              uczy się Next.js i Reacta od paru miesięcy. JavaScript znam już od
              3 lat, choć nauka bywa nieco nieregularna.
            </p>
            <p className="mb-3 fadein-left fadeins-2">
              ⠀⠀⠀⠀⠀Moją pasją jest tworzenie botów na Discorda przy pomocy
              Discord.js. W wolnym czasie lubię grać.
            </p>
          </div>
        </section>
      </div>
      <div className="my-20 space-y-20">
        <div className="m-10 h-full flex justify-center flex-col">
          <header>
            <div className="text-2xl font-bold text-white mb-5 justify-center fadein-bot title-section flex items-center delay-300">
              <div className="h-[1px] w-16 bg-red-400 md:w-48"></div>&nbsp; Tech
              Stack &nbsp;
              <div className="h-[1px] w-16 bg-red-400 md:w-48"></div>
            </div>
          </header>
          <div className="flex flex-wrap justify-center items-center gap-5 delay-500">
            <TechStackCard
              name="Typescript"
              Icon={BiLogoTypescript}
              advanced="Średniozaawansowany"
            />
            <TechStackCard
              name="Javascript"
              Icon={BiLogoJavascript}
              advanced="Zaawansowany"
            />
            <TechStackCard
              name="Next.js"
              Icon={RiNextjsFill}
              advanced="Początkujący"
            />
            <TechStackCard
              name="HTML"
              Icon={BiLogoHtml5}
              advanced="Średniozaawansowany"
            />
            <TechStackCard
              name="CSS"
              Icon={BiLogoCss3}
              advanced="Średniozaawansowany"
            />
            <TechStackCard
              name="Tailwind"
              Icon={BiLogoTailwindCss}
              advanced="Średniozaawansowany"
            />
          </div>
        </div>

        <div className="m-10 h-full flex justify-center mt-10 flex-col">
          <header>
            <div className="text-2xl font-bold text-white mb-5 justify-center fadein-bot title-div flex items-center delay-300">
              <div className="h-[1px] w-16 bg-red-400 md:w-48"></div>&nbsp;
              Narzędzia &nbsp;
              <div className="h-[1px] w-16 bg-red-400 md:w-48"></div>
            </div>
          </header>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <TechStackCard
              name="Visual Studio Code"
              Icon={BiLogoVisualStudio}
              advanced="Edytor kodu"
            />
            <TechStackCard
              name="NPM"
              Icon={FaNpm}
              advanced="Menadżer pakietów"
            />
            <TechStackCard
              name="MongoDB"
              Icon={BiLogoMongodb}
              advanced="Bazy danych"
            />
            <TechStackCard
              name="Node"
              Icon={BiLogoNodejs}
              advanced="Środowisko wykonawcze JavaScript"
            />
            <TechStackCard
              name="Git"
              Icon={BiLogoGit}
              advanced="Kontrola wersji"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;

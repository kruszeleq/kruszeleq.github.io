import Image from "next/image";
import Config from "../app.config";

const page = () => {
  return (
    <main className="mt-[100px]">
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
              className="w-9/12 rounded-full mb-3 fadein-up border-4 border-red-400 shadow-[0_0_73px_-9px_rgba(255,112,112,.44)]"
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
      <footer className="w-full h-full text-gray-700 font-semibold flex justify-center">
        Więcej wkrótce...
      </footer>
    </main>
  );
};

export default page;

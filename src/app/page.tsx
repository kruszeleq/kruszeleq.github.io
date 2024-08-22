import Image from "next/image";
import Config from "./app.config";

export default function Home() {
  return (
    <main className="mt-[100px] flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
      <div className="space-y-2 text-center md:text-left px-10 fadein-bot duration-1000">
        <p className="text-red-200">Cześć! Jestem</p>
        <h1 className="text-4xl font-bold md:text-5xl text-white">itzkrofi</h1>
        <div className="py-2">
          <h1 className="typewriter text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-red-500 md:text-2xl ">
            <span className="wrap">Discord.js Developer</span>
          </h1>
        </div>
      </div>
      <div className="flex justify-center md:justify-start fadein-right">
        <Image
          alt="avatar"
          fetchPriority="high"
          width={300}
          height={300}
          decoding="async"
          className="md:h-auto rounded-full border-4 border-red-400 shadow-[0_0_73px_-9px_rgba(255,112,112,.44)]"
          src={Config.avatarURL}
        ></Image>
      </div>
    </main>
  );
}

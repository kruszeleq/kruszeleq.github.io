import Config from "@/app/app.config";
import { TechStackCard } from "@/components/about/techStackCard";
import Image from "next/image";
import React from "react";
import {
	BiLogoDiscordAlt,
	BiLogoMongodb,
	BiLogoTypescript,
	BiMusic,
} from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { RxSlash } from "react-icons/rx";

function NextronPage() {
	return (
		<div className="mt-[50px] mb-36 max-w-7xl w-full m-auto">
			<div className="px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] bg-[#1e1e1f] rounded-3xl text-white mx-3 mb-5 overflow-hidden">
				<div className="flex text-center items-center ">
					<Image
						src={Config.nextron}
						alt="Nextron"
						width={1}
						height={1}
						draggable={false}
						className="rounded-3xl w-1/4 fadein-left hidden md:block"
					/>
					<div className="mx-10 space-y-10 ">
						<h1 className="text-4xl font-semibold fadein-right fadeins-1">
							Nextron
						</h1>

						<p className="text-xl fadein-right fadeins-2">
							Nextron jest botem muzycznym wykorzystującym Discord.js, bazę
							danych MongoDB oraz moduł DisTube.
							<br /> Obsługiwane platformy: Soundcloud, Spotify
						</p>
						<button className="border fadein-up delay-1000 border-red-400 rounded-3xl bg-red-400 bg-opacity-10 p-3 px-5 inline-flex">
							<span>Zobacz na github</span>
							<FiExternalLink className="ml-2 w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
			<div className="m-10 h-full flex justify-center mt-36 flex-col">
				<header>
					<div className="text-2xl font-bold text-white mb-10 justify-center fadein-bot title-div flex items-center delay-300">
						<div className="h-[1px] w-16 bg-red-400 md:w-48" />
						&nbsp; Technologie &nbsp;
						<div className="h-[1px] w-16 bg-red-400 md:w-48" />
					</div>
				</header>
				<div className="flex flex-wrap justify-center items-center gap-5">
					<TechStackCard
						name="Typescript"
						Icon={BiLogoTypescript}
						advanced="Superset Javascript"
					/>
					<TechStackCard
						name="MongoDB"
						Icon={BiLogoMongodb}
						advanced="Baza danych"
					/>
					<TechStackCard
						name="Discord.js"
						Icon={BiLogoDiscordAlt}
						advanced="Biblioteka Discord API"
					/>
					<TechStackCard
						name="Distube"
						Icon={BiMusic}
						advanced="Moduł do obsługi muzyki"
					/>
				</div>
			</div>
			<div className="m-10 h-full flex justify-center mt-36 mb-20 flex-col">
				<header>
					<div className="text-2xl font-bold text-white mb-10 justify-center fadein-bot title-div flex items-center delay-300">
						<div className="h-[1px] w-16 bg-red-400 md:w-48" />
						&nbsp; Komendy &nbsp;
						<div className="h-[1px] w-16 bg-red-400 md:w-48" />
					</div>
				</header>
				<div className="flex flex-wrap justify-center items-center gap-5">
					<TechStackCard
						name="play"
						Icon={RxSlash}
						advanced="Wyszukuje i odtwarza muzykę"
					/>
					<TechStackCard
						name="pause"
						Icon={RxSlash}
						advanced="Zatrzymuje/wznawia muzykę"
					/>
					<TechStackCard
						name="queue"
						Icon={RxSlash}
						advanced="Pokazuje utwory w kolejce"
					/>
					<TechStackCard
						name="lyrics"
						Icon={RxSlash}
						advanced="Pokazuje tekst utworu"
					/>
					<TechStackCard
						name="stop"
						Icon={RxSlash}
						advanced="Zatrzymuje kolejkę"
					/>
					<TechStackCard
						name="autoplay"
						Icon={RxSlash}
						advanced="Odtwarza powiązane utwory"
					/>
					<TechStackCard
						name="filter"
						Icon={RxSlash}
						advanced="Efekty, np nightcore"
					/>
				</div>
			</div>
		</div>
	);
}

export default NextronPage;

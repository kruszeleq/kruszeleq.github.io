"use client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import toast from "react-hot-toast";

interface ICard {
  title: string;
  description: string;
  imageURL: string;
  buttonLink: string;
}

const Card: FC<ICard> = (props) => {
  return (
    <div
      className="flex-[50%] max-w-[450px] px-5 py-5 md:px-12 md:py-10 inline-flex flex-col justify-center items-center text-center border border-[#383838] bg-[#1e1e1f]
      rounded-3xl text-white mx-3 mb-5 overflow-hidden"
    >
      <Image
        src={props.imageURL}
        width={350}
        height={250}
        alt="Project Photo"
        className="max-w-[350px] mb-5 max-h-[250px] align-center rounded-xl fadein-bot duration-1000"
      />
      <h2 className="text-3xl font-semibold text-[#ff7070] fadein-left fadeins-1">
        {props.title}
      </h2>
      <p className="mb-7 mt-2 fadein-left fadeins-2">{props.description}</p>
      {/* <Link href={props.butt} className="w-full fadein-up delay-1000"> */}
      <button
        onClick={() => {
          toast.success("Wkrótce...", {
            id: "soon",
          });
        }}
        className="text-red-400 hover:text-white bg-red-400 bg-opacity-10 p-2 rounded-xl w-full text-2xl font-semibold transition-colors fadein-up"
        style={{ animationDelay: "1000ms" }}
      >
        Zobacz więcej
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Card;

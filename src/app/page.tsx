"use client";
import { Clock1 } from "lucide-react";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  return (
    <>
      {/* <div className="py-10 flex justify-center ">
        <Alert className="w-[20rem] bg-stone-50 dark:bg-stone-950">
          <Clock1 className="h-4 w-4" />
          <AlertTitle>Strona główna</AlertTitle>
          <AlertDescription>Strona nie jest jeszcze ukończona</AlertDescription>
        </Alert>
      </div> */}

      <div className="flex justify-center mt-5">
        <div className="flex justify-center lg:flex-row flex-col items-center w-1/2 space-y-10 text-center dark:bg-stone-950 bg-stone-50 border-2 dark:border-stone-900 shadow-2xl shadow-stone-900 rounded-3xl  top-0 z-[-2] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(96,96,155,0.3),rgba(255,255,255,0))]">
          <div>
            <Image
              src="./myavatar-nobg.png"
              alt="My Avatar"
              width={463}
              height={434}
              className="rounded-full p-5"
            ></Image>
          </div>
          <div className="lg:space-y-2 lg:pr-10 p-5 pt-0">
            <h1 className="text-2xl font-semibold tracking-tight first:mt-0">
              <b>Cześć, to ja! 👋</b>
            </h1>
            <p>
              Jestem programistą z pasją do tworzenia stron. <br />
              Uczę się Javascriptu od 3 lat, Reacta i NextJS od 2 miesięcy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Props = {
  cardTitle?: string;
  cardDescription?: string;
  cardImage?: string;
  cardFooter?: string;
};

const Cards = ({
  cardDescription,
  cardFooter,
  cardImage,
  cardTitle,
}: Props) => {
  return (
    <>
      <Card className="lg:max-w-md  dark:bg-stone-950 bg-stone-50 top-0 z-[-2] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(96,96,155,0.3),rgba(255,255,255,0))]">
        <CardHeader>
          <CardTitle>{cardTitle ? cardTitle : ""}</CardTitle>
          <CardDescription>
            {cardDescription ? cardDescription : ""}
          </CardDescription>
        </CardHeader>
        {cardImage && (
          <CardContent>
            <img src={cardImage} alt="Card Image" className="rounded" />
          </CardContent>
        )}
        <CardFooter className="space-x-5">
          <p>{cardFooter ? cardFooter : ""}</p>
          <Button className="ml-auto" variant="outline">
            Szczegóły
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Cards;

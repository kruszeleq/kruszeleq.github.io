import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

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
      <Card className="lg:max-w-md  dark:bg-stone-950 bg-stone-50 ">
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
        <CardFooter>
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

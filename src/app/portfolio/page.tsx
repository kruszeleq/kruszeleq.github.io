import Cards from "@/components/Items/Card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock1 } from "lucide-react";

const PortfolioPage = () => {
  return (
    <>
      {/* <div className="py-10 flex justify-center">
        <Alert className="w-[20rem] dark:bg-stone-950 bg-stone-50">
          <Clock1 className="h-4 w-4" />
          <AlertTitle>Portfolio</AlertTitle>
          <AlertDescription>Strona nie jest jeszcze ukończona</AlertDescription>
        </Alert>
      </div> */}
      <div>
        <div className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 py-5 text-center">
          <h1>Moje Projekty</h1>
        </div>
        <div className="py-5 flex items-center justify-center flex-col md:flex-row md:space-x-10  md:space-y-0 space-y-10">
          <Cards
            cardTitle="Plan Lekcji"
            cardDescription="Odświeżenie UI planu lekcji"
            cardFooter="21.02.2024"
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;

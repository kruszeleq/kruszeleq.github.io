import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock1 } from "lucide-react";

const PortfolioPage = () => {
  return (
    <div className="py-10 flex justify-center ">
      <Alert className="w-[20rem]">
        <Clock1 className="h-4 w-4" />
        <AlertTitle>Portfolio</AlertTitle>
        <AlertDescription>Strona nie jest jeszcze ukończona</AlertDescription>
      </Alert>
    </div>
  );
};

export default PortfolioPage;

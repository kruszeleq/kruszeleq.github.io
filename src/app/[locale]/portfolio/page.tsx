import Cards from "@/components/Items/Card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import initTranslations from "@/i18n";
import { Clock1 } from "lucide-react";

const PortfolioPage = async ({ params }: { params: { locale: string } }) => {
  const { t } = await initTranslations(params.locale, ["portfolio"]);
  return (
    <>
      <div className="py-10 flex justify-center">
        <Alert className="w-[20rem] dark:bg-stone-950 bg-stone-50">
          <Clock1 className="h-4 w-4" />
          <AlertTitle>{t("portfolio:title")}</AlertTitle>
          <AlertDescription>{t("portfolio:description")}</AlertDescription>
        </Alert>
      </div>
      <div className="py-5 flex flex-col items-center space-y-10">
        <Cards
          cardTitle="Project Name"
          cardDescription="Project Description"
          cardFooter="Project Footer"
          cardImage="https://www.sportstravelmagazine.com/wp-content/uploads/2013/01/testimage.jpg"
        />
      </div>
    </>
  );
};

export default PortfolioPage;

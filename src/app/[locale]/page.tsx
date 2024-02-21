import { Clock1 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import initTranslations from "@/i18n";

export default async function Home({ params }: { params: { locale: string } }) {
  const { t } = await initTranslations(params.locale, ["home"]);
  return (
    <>
      <div className="py-10 flex justify-center ">
        <Alert className="w-[20rem] bg-stone-50 dark:bg-stone-950">
          <Clock1 className="h-4 w-4" />
          <AlertTitle>{t("home:title")}</AlertTitle>
          <AlertDescription>{t("home:description")}</AlertDescription>
        </Alert>
      </div>
    </>
  );
}

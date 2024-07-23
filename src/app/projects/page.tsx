import Config from "../app.config";
import Card from "@/components/projects/card";
const page = () => {
  return (
    <main className="mt-[100px] flex flex-wrap justify-center">
      <Card
        title="Nextron"
        description="Nextron to bot muzyczny stworzony przy pomocy Discord.js wraz z bazą danych MongoDB oraz modułu DisTube."
        imageURL={Config.projectImage}
        buttonLink="/"
      />
    </main>
  );
};

export default page;

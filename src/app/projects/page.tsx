import Config from "../app.config";
import Card from "@/components/projects/card";
const page = () => {
  return (
    <main className="mt-[150px] flex flex-wrap justify-center">
      <Card
        title="Nextron"
        description="Nextron to bot muzyczny stworzony przy pomocy Discord.js wraz z bazą danych MongoDB oraz modułu DisTube."
        imageURL={Config.nextron}
        buttonLink="/projects/nextron"
      />
      <Card
        title="Bot Typescript"
        description="To jest to samo co Nextron, ale napisany w supersecie JS'a - w Typescripcie, razem z wieloma nowościami."
        imageURL={Config.typescript}
        buttonLink="/projects"
      />
    </main>
  );
};

export default page;

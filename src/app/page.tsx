import Details from "@/components/MainIntroComps/Main";
import Sidebar from "@/components/SideIntroComps/SideIntro";

export default function Home() {
  return (
    <main className="flex flex-row justify-items-start min-h-screen container mx-auto mt-5 mb-20">
      <Sidebar />
      <Details />
    </main>
  );
}

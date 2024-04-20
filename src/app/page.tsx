import Details from "@/components/MainIntroComps/Main";
import Sidebar from "@/components/SideIntroComps/SideIntro";

export default function Home() {
  return (
    <main className="md:flex md:flex-row md:justify-items-start min-h-screen max-w-[1200px] min-w-[350px] w-[96%] mx-auto mt-5 mb-20">
      <Sidebar />
      <Details />
    </main>
  );
}

import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen container mx-auto max-w-3xl mt-32  mb-12">
      <Intro />
      <hr className="w-48 h-[2px] my-14 mx-auto border-0 rounded bg-purple-800" />
      <Projects />
    </main>
  );
}

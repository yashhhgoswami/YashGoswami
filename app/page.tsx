import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Contact } from "@/components/main/contact";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-12">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}

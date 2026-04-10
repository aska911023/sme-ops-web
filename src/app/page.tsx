import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { HotModules } from "@/components/HotModules";
import { Bundles } from "@/components/Bundles";
import { Timeline } from "@/components/Timeline";
import { Comparison } from "@/components/Comparison";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PainPoints />
      <HotModules />
      <Bundles />
      <Timeline />
      <Comparison />
      <FinalCTA />
      <Footer />
    </main>
  );
}

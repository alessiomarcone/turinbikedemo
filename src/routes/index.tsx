import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Showcase } from "@/components/site/Showcase";
import { Manifesto } from "@/components/site/Manifesto";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Turinbike — Bici, noleggio e officina a Torino" },
      { name: "description", content: "Noleggio bici, vendita e officina nel cuore di Torino. Tour guidati, e-bike, gravel e road. Let's b-hike." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Showcase />
      <Manifesto />
      <Contact />
      <Footer />
    </main>
  );
}

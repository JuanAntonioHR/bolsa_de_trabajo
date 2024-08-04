import { Hero, Advertising } from "@/components";


export default function LandingPage() {
  return (
    <main className="flex flex-col gap-48 px-48">
      <Hero />
      <Advertising />

      <div className="h-screen">
        <span>Siguiente seccion</span>
      </div>
    </main>
  );
}
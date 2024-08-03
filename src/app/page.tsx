import { Advertising, NavBar, Hero } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <NavBar />
      <main className="flex flex-col gap-48 px-48">
        <Hero />
        <Advertising />

        <div className="h-screen">
          <span>Siguiente seccion</span>
        </div>
      </main>
    </div>
  );
}

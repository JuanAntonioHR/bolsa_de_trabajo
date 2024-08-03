import { NavBar, Hero } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <NavBar />
      <main className="flex flex-col gap-16 px-72">
        <Hero />
      </main>
    </div>
  );
}

import { Hero, Advertising, Indicators } from "@/components";


export default function LandingPage() {
  return (
    <main className="flex flex-col gap-48 px-48">
      <Hero />
      <Advertising />
      <Indicators />
    </main>
  );
}
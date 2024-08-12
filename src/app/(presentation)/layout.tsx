import { NavBar } from "@/components";

export default function PresentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-16">
      <NavBar />
      {children}
    </div>
  );
}
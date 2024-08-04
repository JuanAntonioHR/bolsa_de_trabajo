import { ActiveLink } from "@/components";
import { pagesInLanding } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {


  return (
    <header className="w-full bg-white shadow-sm flex justify-between items-center px-10">
      <Link href="/" className="flex gap-4 items-center">
        <Image
          src="/uaq.png"
          width={40}
          height={40}
          alt=""
        />
        <span className="max-w-24 text-black/70 text-sm font-bold">
          Bolsa de trabajo UAQ
        </span>
      </Link>
      <div className="flex gap-8">
        {pagesInLanding.map(page => (<ActiveLink key={page.name} href={page.href} name={page.name} />))}
      </div>
    </header>
  );
}
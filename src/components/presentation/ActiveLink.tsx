"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Page } from "@/interfaces";

export function ActiveLink({ href, name, icon }: Page) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname.includes(href) ? "text-zinc-800 font-bold border-b-brand-700" : "text-zinc-500 border-b-transparent hover:border-b-zinc-200"} py-7 px-4 box-border border-b-2 text-sm transition-all`}
    >
      {icon && <span className="material-symbols-rounded">{icon}</span>} {name}
    </Link>
  );
}
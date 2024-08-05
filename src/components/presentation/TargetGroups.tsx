import Image from "next/image";
import Link from "next/link";
import { targetGroups } from "@/constants";


export function TargetGroups() {
  return (
    <>
      {
        targetGroups.map(({ adviceHref, adviceText, description, image, signInHref, signInText, title }, index) => (
          <div key={index} className="flex gap-20 px-48 items-center">
            <div className={`flex flex-col ${index % 2 == 0 ? "order-1" : "order-2"} gap-4 flex-1`}>
              <h3 className="text-2xl font-bold">{title}</h3>
              <Link className="text-brand-500 hover:scale-105 transition-all w-fit" href={adviceHref}>{adviceText}</Link>
              <p className="text-zinc-600 leading-loose">{description}</p>
              <Link className="bg-brand-700 w-fit mt-20 px-8 py-4 text-sm text-white transition-all hover:bg-brand-800 rounded-xl" href={signInHref}>{signInText}</Link>
            </div>
            <Image
              src={image}
              width={450}
              height={450}
              alt="Xd"
              className={`flex-1 ${index % 2 == 0 ? "order-2 rounded-tr-[48px] rounded-bl-[48px]" : "order-1 rounded-tl-[48px] rounded-br-[48px]"} aspect-square object-cover`}
            />
          </div>
        ))
      }
    </>
  );
}
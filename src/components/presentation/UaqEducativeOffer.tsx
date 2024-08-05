import Link from "next/link";
import Image from "next/image";
import { faculties } from "@/constants";

export function UaqEducativeOffer() {


  return (
    <div className="flex flex-col gap-12 px-48 items-center">
      <h3 className="text-zinc-600 font-bold text-2xl">Conoce la oferta educativa de la UAQ</h3>
      <p className="text-zinc-500 mx-24 text-center leading-loose">Explora la amplia gama de programas académicos que ofrecemos Desde licenciaturas hasta maestrías y doctorados, nuestra universidad te brinda la educación de calidad que necesitas para alcanzar tus metas.</p>
      <Link
        href="https://www.uaq.mx/index.php/oferta-educativa/programas-educativos"
        className="text-brand-500 underline hover:scale-105 transition-all"
        target="_blank"
      >
        Ver oferta educativa UAQ
      </Link>

      <div className="flex flex-wrap justify-center gap-4">
        {
          faculties.map(fac => (
            <Link target="_blank" href={fac.href} className="flex gap-4 items-center w-80 hover:scale-105 transition-all" key={fac.name}>
              <span className={`block w-8 h-8 rounded-full ${fac.color}`}></span>
              <span className="line-clamp-1 text-sm">{fac.name}</span>
            </Link>
          ))
        }
      </div>

      <Image
        src="https://wizi.academy/assets/img/landings/Fondo-UAQ.webp"
        alt="Xd"
        width={1200}
        height={500}
        className="rounded-3xl w-[600px] h-[400px] object-cover"
      />
    </div>
  );
}
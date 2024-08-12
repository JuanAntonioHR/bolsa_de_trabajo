import Image from "next/image";
import Link from "next/link";

export function Contact() {



  return (
    <section className="flex flex-col items-center gap-12 py-24 bg-zinc-100 px-48">
      <h3 className="text-2xl font-bold">Conéctate con nosotros en redes sociales!</h3>

      <div className="flex gap-4 items-center">
        <Link href="/"><Image src="/facebook.svg" width={40} height={40} alt="Xd" /></Link>
        <Link href="/"><Image src="/linkedin.svg" width={40} height={40} alt="Xd" /></Link>
        <Link href="/"><Image src="/youtube.svg" width={40} height={40} alt="Xd" /></Link>
        <Link href="/"><Image src="/instagram.svg" width={40} height={40} alt="Xd" /></Link>
      </div>

      <p className="text-center leading-loose text-zinc-600">Mantente al día con las últimas noticias, eventos y oportunidades laborales. Síguenos en Facebook e Instagram para ser parte de nuestra comunidad, conocer historias de éxito y recibir contenido exclusivo que te ayudará a avanzar en tu carrera.</p>
    </section>
  );
}
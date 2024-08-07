import Image from "next/image";
import Link from "next/link";

export function Footer() {


  return (
    <footer className="flex flex-col gap-12 px-32 mb-12">
      <span className="w-full h-[1px] bg-zinc-200"></span>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between">
          <h3 className="text-xl">Bolsa de trabajo UAQ</h3>
          <div className="flex gap-4">
            <Link href="/"><Image src="/facebook.svg" width={32} height={32} alt="Xd" /></Link>
            <Link href="/"><Image src="/linkedin.svg" width={32} height={32} alt="Xd" /></Link>
            <Link href="/"><Image src="/youtube.svg" width={32} height={32} alt="Xd" /></Link>
            <Link href="/"><Image src="/instagram.svg" width={32} height={32} alt="Xd" /></Link>
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-6">
            <h4>Acciones</h4>
            <Link className="text-sm text-zinc-500" href="/">Inicia sesión</Link>
            <Link className="text-sm text-zinc-500" href="/">Regístrate</Link>
            <Link className="text-sm text-zinc-500" href="/">¿Estudiante UAQ?</Link>
          </div>
          <div className="flex flex-col gap-6">
            <h4>Secciones</h4>
            <Link className="text-sm text-zinc-500" href="/">Bienvenida</Link>
            <Link className="text-sm text-zinc-500" href="/">Grandes empresas</Link>
            <Link className="text-sm text-zinc-500" href="/">Indicadores</Link>
          </div>
          <div className="flex flex-col gap-6">
            <h4>Infórmate</h4>
            <Link className="text-sm text-zinc-500" href="/">Consejos para estudiantes</Link>
            <Link className="text-sm text-zinc-500" href="/">Consejos para egresados</Link>
            <Link className="text-sm text-zinc-500" href="/">Consejos para empresas</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
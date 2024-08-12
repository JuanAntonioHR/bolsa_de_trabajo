import Image from "next/image";

export function Hero() {


  return (
    <div className="flex items-center justify-between px-48">

      <div className="flex flex-col w-[450px] gap-4">
        <h1 className="text-4xl text-zinc-800">Plataforma virtual de empleo y bolsa de trabajo UAQ</h1>

        <p className="text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse maiores modi molestias aut magnam
          nesciunt molestiae aliquid excepturi tenetur odit possimus quaerat libero facere, eos sapiente,
          fugit ullam, quos sequi!
        </p>

        <div className="mt-12 flex gap-6">
          <button className="bg-brand-700 w-fit px-8 py-4 text-white transition-all hover:bg-brand-800 rounded-full">Regístrate ahora</button>
          <button className="text-brand-700 hover:text-brand-800 transition-all hover:shadow px-8 py-4 rounded-full">Inicia sesión</button>
        </div>
      </div>

      <div className="relative w-[500px] h-[400px]">
        <Image
          src="/hero-image-1.png"
          width={300}
          height={300}
          alt=""
          className="absolute top-0 left-0"
        />
        <Image
          src="/hero-image-2.png"
          width={300}
          height={300}
          alt=""
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
}
import { careers1, careers2 } from "@/constants";
import { Chip } from "@nextui-org/react";

export function AppropriateJob() {
  return (
    <div className="flex gap-8 items-center">
      <div className="flex flex-wrap max-w-[350px] gap-2 items-start">
        {
          careers1.map(car => <Chip className="bg-transparent box-border border-2 border-zinc-200/60 py-5 px-4 text-zinc-400" key={car}>{car}</Chip>)
        }
      </div>
      <div className="flex flex-col flex-1 items-center gap-20">
        <h2 className="text-2xl font-bold">Encuentra el empleo ideal</h2>
        <p className="text-zinc-500 leading-loose text-center">
          En la era moderna, encontrar el empleo perfecto puede ser un desafío, pero no tiene por qué serlo.
          Nuestra plataforma de bolsa de trabajo, especialmente diseñada para la comunidad universitaria,
          está aquí para facilitar tu búsqueda y conectar talento con oportunidades.
        </p>
      </div>
      <div className="flex flex-wrap max-w-[350px] gap-2 justify-end">
        {
          careers2.map(car => <Chip className="bg-transparent box-border border-2 border-zinc-200/60 py-5 px-4 text-zinc-400" key={car}>{car}</Chip>)
        }
      </div>
    </div>
  );
}
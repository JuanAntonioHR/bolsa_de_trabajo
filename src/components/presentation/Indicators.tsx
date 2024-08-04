import { indicators } from "@/constants";

export function Indicators() {



  return (
    <div className="flex flex-col items-center gap-12">
      <h2 className="text-2xl font-bold">Nuestros indicadores</h2>
      <div className="flex gap-12">
        {
          indicators.map(ind => (
            <div key={ind.title} className="flex flex-col flex-1 gap-6 p-6 rounded-2xl shadow">
              <h3 className="text-xl text-zinc-700">{ind.title}</h3>
              <p className="text-zinc-500">{ind.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
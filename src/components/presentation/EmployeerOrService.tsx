import Link from "next/link";

export function EmployeerOrService() {


  return (
    <div className="flex flex-col gap-12 px-48 items-center">
      <h3 className="text-2xl font-bold">¿Eres un empleador o quieres ofrecer tu servicio?</h3>

      <div className="flex">
        <div className="flex flex-col flex-1 gap-4">
          <h4 className="text-xl font-bold text-zinc-600">Quiero públicar vacantes</h4>
          <span className="text-brand-500">Empresas</span>
          <p className="leading-loose text-zinc-600">Si estás buscando candidatos motivados, bien formados y listos para contribuir al éxito de tu empresa, has llegado al lugar indicado.</p>
          <Link className="bg-brand-700 w-fit mt-12 px-8 py-4 text-sm text-white transition-all hover:bg-brand-800 rounded-xl" href="signin/companies">Regístrate como empresa</Link>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <h4 className="text-xl font-bold text-zinc-600">Quiero ofrecer mi servicio</h4>
          <span className="text-brand-500">Egresados UAQ</span>
          <p className="leading-loose text-zinc-600">Conecta con personas que necesitan tus servicios en contaduría, odontología, psicología y muchas otras áreas.</p>
          <Link className="bg-brand-700 w-fit mt-12 px-8 py-4 text-sm text-white transition-all hover:bg-brand-800 rounded-xl" href="signin/uaq">Regístrate como miembro UAQ</Link>
        </div>
      </div>
    </div>
  );
}
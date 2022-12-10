import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export const Header = () => {


    const { cerrarSesion } = useAuth();

  return (
    <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-indigo-200 text-center">Administrador de Pacientes de <span className="text-white font-black"> Verterinaria</span></h1>

            <nav className="flex flex-col md:flex-row gap-4 mt-5 lg:mt-0 items-center">
                <Link to="/admin" className="text-white text-lg uppercase font-bold">Pacientes</Link>
                <Link to="/admin/perfil" className="text-white text-lg uppercase font-bold">Perfil</Link>

                <button
                    type="button"
                    className="text-white text-lg uppercase font-bold"
                    onClick={cerrarSesion}
                >Cerrar Sesión
                </button>

            </nav>

        </div>
    </header>
  )
}

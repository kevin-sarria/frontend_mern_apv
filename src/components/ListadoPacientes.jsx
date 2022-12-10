import usePacientes from "../hooks/usePacientes"
import { Paciente } from "./Paciente";

export const ListadoPacientes = () => {
  
  const { pacientes } = usePacientes();
  
  return (
    <>

      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          
          <p className="text-xl mt-5 mb-10 text-center">
            Adminstra tus <span className="text-indigo-600 font-bold"> pacientes y citas</span>
          </p>

        {pacientes.map( paciente => (
        <Paciente
          key={paciente._id}
          paciente={paciente}
        />
        ))}

        </>
      ) : (
      <>
        <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Comienza agregando pacientes <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
        </p>
      </>
      )}

    </>
  )
}

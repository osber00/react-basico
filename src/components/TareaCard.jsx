import {useContext} from 'react'
import {TareasContext} from '../context/TareasContext'

function TareaCard({tarea}) {

  const {eliminarTarea} = useContext(TareasContext)

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h3 className='text-xl font-bold capitalize'>{tarea.titulo}</h3>
      <p className='text-gray-500 text-sm mb-2'>{tarea.descripcion}</p>
      <span className={tarea.estado ? 'bg-orange-400 px-1 py-1 rounded-md mr-2' : 'bg-blue-500 px-1 py-1 rounded-md mr-2'}>{tarea.estado ? 'Pendiente' : 'Realizada'}</span>
      <button onClick={()=> eliminarTarea(tarea.id)} className='bg-red-600 px-2 py-1 rounded-md mt-2 hover:bg-red-200 hover:text-red-500'>Eliminar</button>
    </div>
  )
}

export default TareaCard
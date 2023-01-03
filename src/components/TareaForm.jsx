import {useState, useContext} from 'react'
import {TareasContext} from '../context/TareasContext'

function TareaForm() {

    const [titulo, setTitulo] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [estado, setEstado] = useState(true)
    const {registrarTarea} = useContext(TareasContext)

    function addTarea(e) {
        e.preventDefault()
        registrarTarea({titulo, descripcion, estado})
        setEstado(true)
        setTitulo("")
        setDescripcion("")

    }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={addTarea} className='bg-slate-800 py-10 px-5 rounded-md'>
        <input type='text' onChange={(e)=> setTitulo(e.target.value)} value={titulo} placeholder='Título de la tarea' className='bg-slate-300 p-3 mb-2 w-full' />
        <textarea onChange={(e)=>setDescripcion(e.target.value)} value={descripcion} placeholder="Descripción de la tarea" className='bg-slate-300 p-3 mb-2 w-full'/>
        <span className='text-white mr-2'>
          <input type='radio' name='estado' checked={estado} onClick={(e) => setEstado(true)} value={estado}/> Pendiente
        </span>
        <span className='text-white'>
          <input type='radio' name='estado' onClick={(e) => setEstado(false)} value={estado}/> Realizada
        </span>
        <br/>
        <button className='bg-blue-600 text-white mt-3 py-1 px-2 rounded-md'>Registrar</button>
      </form>
    </div>
  )
}

export default TareaForm
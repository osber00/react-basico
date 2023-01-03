import {useContext} from 'react'
import {TareasContext} from './context/TareasContext'
import TareaForm from './components/TareaForm'
import Tareas from './components/Tareas'
function App() {

  const {tareas} =useContext(TareasContext)

  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-4'>
        <h1 className='text-4xl font-bold text-white py-6 text-center'>Lista de tareas App ({tareas.length})</h1>
        <TareaForm></TareaForm>
        <Tareas></Tareas>
      </div>
    </main>
  )
}

export default App
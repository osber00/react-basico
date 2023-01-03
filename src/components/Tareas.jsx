import { useContext } from "react";
import { TareasContext } from "../context/TareasContext";
import TareaCard from "./TareaCard";

function Tareas() {
  const { tareas } = useContext(TareasContext);

  if (tareas.length == 0) {
    return (
      <h2 className="text-2xl font-bold text-white text-center mt-4">No  hay tareas registradas</h2>
    )
  }

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2 mt-6">
      {tareas.map((tarea) => (
        <div key={tarea.id}>
          <TareaCard tarea={tarea}></TareaCard>
        </div>
      ))}
    </div>
  );
}

export default Tareas;

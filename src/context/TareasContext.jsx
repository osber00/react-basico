import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tareas";

export const TareasContext = createContext();

export function TareasContextProvider(props) {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    setTareas(data);
  }, []);

  const registrarTarea = (dataTarea) => {
    setTareas([...tareas,{
      id: tareas.length + 1,
      titulo: dataTarea.titulo,
      descripcion: dataTarea.descripcion,
      estado: dataTarea.estado
    }])
  }

  const eliminarTarea = (tareaId) => {
    const listaTarea = tareas.filter((item) => item.id !== tareaId)
    setTareas(listaTarea)
  }

  return (
    <TareasContext.Provider value={{ tareas, registrarTarea, eliminarTarea }}>
      {props.children}
    </TareasContext.Provider>
  );
}

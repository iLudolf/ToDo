import { createContext, ReactNode, useState } from 'react'
import * as uuid from "uuid"
interface signInCredentials {
  email: string
  password: string
}

interface AuthProviderProps {
  children: ReactNode
}
interface ITask {
  id: string;
  description: string;
  concluded: boolean;
}

type TasksContextData = {
  addTask(description: string): Promise<void>
  tasks: ITask[];
  deleteTask(id: string): void;
  setConcludedTask(id: string): void;
}


export const TasksContext = createContext({} as TasksContextData)

export function TasksProvider({ children }: AuthProviderProps) {

  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = async (description: string) => {
    setTasks([{
      id: uuid.v4(),
      description: description,
      concluded: false,
    }, ...tasks])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const setConcludedTask = (id: string) => {
    let arryAux: ITask[] = []
    tasks.map((element) => {
      if (element.id === id) {
        element.concluded = (!element.concluded)
      }
      arryAux.push(element)
    })
    setTasks(arryAux)
  }


  return (
    <TasksContext.Provider value={{ addTask, tasks, deleteTask, setConcludedTask }}>
      {children}
    </TasksContext.Provider>
  )
}
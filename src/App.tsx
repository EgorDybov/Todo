import { createContext, use, useContext, useEffect, useState } from 'react'
import { TodoItem } from './components/todoItem/TodoItem'
import { ITask, ITodoContext, Status } from './components/todoForm/types'
import './App.css'

export const StoreTodoContext = createContext< ITodoContext | null>(null)


function App() {

  const [todos, setTodos] = useState<ITask[]>([])
  const [filtered, setFiltered] = useState<ITask[]>(todos)
  const [status, setStatus] = useState<Status>(Status.All)

  const storedTasks = localStorage.getItem('todos')
  
  useEffect(() => {
    if(storedTasks) {
      try { 
        const parseTasks = JSON.parse(storedTasks)
        setTodos(parseTasks)
        setFiltered(parseTasks)
      
      } catch(error) {
        console.log('Ошибка получения задач', error);
      }
      
    }
    
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if(status === Status.All) {
      setFiltered(todos)
    } else if(status === Status.Completed){
      setFiltered([...todos.filter((todo) => todo.completed)])
    } else if(status === Status.NotCompleted) {
      setFiltered([...todos.filter((todo) => !todo.completed)])
    }

  }, [todos, status])


  const todoFilter = (status: Status) => {
    setStatus(status)

    // выполняется проверка всех if

    // if(){

    // }

    // if() {

    // }

    // if() {

    // }

    
  }



  const deleteTodo = (id: number | string) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
    // setFiltered([...filtered.filter((todo) => todo.id !== id)])
  }

  const setComplete = (id: number | string) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo, completed :!todo.completed} : {...todo})])
    // setFiltered([...filtered.map((todo) => todo.id === id ? {...todo, completed :!todo.completed} : {...todo})])
  }


  const updateTodoTitle = (newTitle: string, id: string | number) => {
    const updatesTodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo, title: newTitle
        }
      } 
      return todo
      
    })
    setTodos(updatesTodos)
  }

  

  return (
    <StoreTodoContext.Provider value={{todos, setTodos, deleteTodo, setComplete, updateTodoTitle, filtered, todoFilter, status}}>
      <main className='main'>
          <h1 className='todo__title'>Todo List</h1>
          <TodoItem/>
      </main>
   </StoreTodoContext.Provider>
  )
}

export default App

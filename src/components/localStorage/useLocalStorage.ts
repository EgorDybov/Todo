import { useEffect, useState } from "react"

export function useLocalStorage(key: string, initialState: any) {
    const [value, setValue] = useState(() => {
        const storedTasks = window.localStorage.getItem(key)
        const isStoredTasks = storedTasks ? JSON.parse(storedTasks) : initialState
        return isStoredTasks
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}



// const [storedTasks, setStoredTasks] = useLocalStorage('todos', []) // [..., ...]
  
// useEffect(() => {
//     setTodos(storedTasks)
//     setFiltered(storedTasks)
  
// }, [])

// useEffect(() => {
//   setStoredTasks(todos)
// }, [todos])

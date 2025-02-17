import { useState, useContext, ChangeEvent, useRef } from "react"
import "./TodoForm.css"
import { StoreTodoContext } from "../../App"
import { ITask, ITodoContext } from "./types"

export const TodoForm = () => {

    const [value, setValue] = useState("")

    const handleChange = (event: ChangeEvent<HTMLInputElement >) => {
        setValue(event.target.value);
    }

    const {todos, setTodos} = useContext<ITodoContext | null>(StoreTodoContext) as ITodoContext

    const addTask = (e:any) => {
        e.preventDefault()
        const newTask: ITask = {
            id: value + Date.now(),
            title: value,
            completed: false
        }

        if(value.trim()) {

            const findTask = todos.find(item => item.title === value)

            if(!findTask) {
                setTodos([...todos, newTask])
                setValue('')
            }
            
        }
        
    }
    
    
    return (
        <form  className="form">
            <input 
                className="form__input" 
                type="text" 
                placeholder="Add a new task..." 
                onChange={handleChange}
                value={value}
            />
            <button type="submit" className="form__button" onClick={addTask}>Add Task</button>
        </form>
    )
}
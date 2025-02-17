import {useContext} from 'react'
import { ITodoContext } from '../todoForm/types'
import { StoreTodoContext } from '../../App'
import { Li } from '../todoTask/TodoTask'
import './TodoItem.css'
import { TodoForm } from '../todoForm/TodoForm'
import { Buttons } from '../buttons/Buttons'

export const TodoItem = () => {

    const { filtered } = useContext<ITodoContext | null>(StoreTodoContext) as ITodoContext

    return (
        <>
            <TodoForm/>
            <hr className='divider'/>
            <Buttons />
            <hr className='divider'/>
            <ul className="task-list">
                {
                    filtered.map((todo) => {
                        return <Li key={todo.id} todo={todo}/>
                    })
                }
    
            </ul>
        </>
    )
}
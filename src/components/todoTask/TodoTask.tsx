import { Modal } from "antd"
import { useContext, useState } from "react"
import { ITask, ITodoContext } from "../todoForm/types"
import { StoreTodoContext } from "../../App"
import done from '../../media/icons/check_circle_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import notDone from '../../media/icons/radio_button_unchecked_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import deleteImg from '../../media/icons/do_not_disturb_on_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'
import './TodoTask.css'

interface Ili {
    todo: ITask
}

export const Li = ({todo}: Ili) => {
    const [textEdit, setTextEdit] = useState(false)
    const [editValue, setEditValue] = useState('')

    const { deleteTodo, setComplete, updateTodoTitle} = useContext<ITodoContext | null>(StoreTodoContext) as ITodoContext

    const handleDelete = (id: string | number) => {

        Modal.confirm({
            title: 'Are you sure???',
            onOk: () =>  deleteTodo(id)
        })
    }
    
    const handleDoubleClick = (title: string) => {
        setEditValue(title)
        setTextEdit(true)
    }

    const closeEditInput = (id: string | number) => {
        updateTodoTitle(editValue, id)
        setTextEdit(false)
    }

    const onChange = (e: any) => {
        setEditValue(e.target.value)
    }
    
    return (
            <li className="task">
                <div className="task__left">
                    <div className="task__done-icon" onClick={() => setComplete(todo.id)}>
                    {todo.completed ? 
                        <img src={done} alt=""/>: 
                        <img src={notDone} alt="" />
                    }
                    </div>
                    {textEdit 
                    ?  <> <input type="text"  onChange={onChange} value={editValue}/> <span onClick={() => closeEditInput(todo.id)}>+</span></> 
                    : <div className={`task__title ${todo.completed ? 'completed__task' : ''}`} onDoubleClick={() => handleDoubleClick(todo.title)}>{todo.title}</div>}
                </div>
                <div className="task__right">
                    <div className="task__delete-icon" onClick={() => handleDelete(todo.id)}>
                        <img src={deleteImg} alt="delete" />
                    </div>  
                </div>
            </li>
    )
}
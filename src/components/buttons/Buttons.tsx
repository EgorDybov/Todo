import { Button, Space } from "antd"
import { useContext, useMemo } from "react"
import { StoreTodoContext } from "../../App"
import { ITodoContext, Status } from "../todoForm/types"
import './Button.css'

export const Buttons = () => {

    const { todoFilter, status } = useContext<ITodoContext | null>(StoreTodoContext) as ITodoContext

    const buttonPrimary: any = useMemo(() => {
        return {
            all: status === Status.All ? 'primary' : 'default', 
            completed:  status === Status.Completed ? 'primary' : 'default',
            notCompleted: status === Status.NotCompleted ? 'primary' : 'default'
        }
    }, [status])

    return (
        <Space className="btns" size={'small'}>
            <Button onClick={()=> todoFilter(Status.All)} type={buttonPrimary.all}>All</Button>
            <Button onClick={()=> todoFilter(Status.Completed)} type={buttonPrimary.completed}>Completed</Button>
            <Button onClick={()=> todoFilter(Status.NotCompleted)} type={buttonPrimary.notCompleted}>Not completed</Button>
        </Space>
    )
}
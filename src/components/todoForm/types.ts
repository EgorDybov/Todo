export interface ITask {
    id: number | string
    title: string
    completed: boolean
}

export interface ITodoContext {
    todos: ITask[], 
    filtered: ITask[],
    status: Status,
    setTodos: (v: any) => void,
    deleteTodo: (v: any) => void,
    setComplete: (v: any) => void,
    updateTodoTitle: (v: string, n: number | string) => void,
    todoFilter: (v: Status) => void
}

export enum Status {
    All = 'all',
    Completed = 'completed',
    NotCompleted = 'notCompleted'
}
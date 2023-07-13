export type Task = {
    id: string;
    title: string;
    description: string;
    status: string;
}


export type Tasks = {
    title: string,
    task: Task[]
}


export type ModalProps = {
    open: boolean,
    handleOpen: (data: Task) => void,
    handleClose: () => void,
    data?: Task,
    handleConfirm: (data: Partial<Task>) => void,
}
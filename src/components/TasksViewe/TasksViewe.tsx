"use client"

import { Chip, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa'
import { AiOutlineDelete } from 'react-icons/ai'
import EditModal from '../EditModal/EditModal';



const tasks = [
    {
        id: 1,
        title: 'Learn MST',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto accusamus nesciunt dignissimos! Officiis voluptatibus quia sint laudantium natus saepe voluptates in sapiente ab! Magni officia quibusdam omnis perspiciatis facilis.',
        status: 'Todo'
    },
    {
        id: 2,
        title: 'Learn MST',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto accusamus nesciunt dignissimos! Officiis voluptatibus quia sint laudantium natus saepe voluptates in sapiente ab! Magni officia quibusdam omnis perspiciatis facilis.',
        status: 'In Progress'
    },
    {
        id: 3,
        title: 'Learn MST',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto accusamus nesciunt dignissimos! Officiis voluptatibus quia sint laudantium natus saepe voluptates in sapiente ab! Magni officia quibusdam omnis perspiciatis facilis.',
        status: 'Completed'
    },
    {
        id: 4,
        title: 'Learn MST',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto accusamus nesciunt dignissimos! Officiis voluptatibus quia sint laudantium natus saepe voluptates in sapiente ab! Magni officia quibusdam omnis perspiciatis facilis.',
        status: 'Todo'
    },
    {
        id: 5,
        title: 'Learn MST',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione architecto accusamus nesciunt dignissimos! Officiis voluptatibus quia sint laudantium natus saepe voluptates in sapiente ab! Magni officia quibusdam omnis perspiciatis facilis.',
        status: 'In Progress'
    },
]

const TasksViewe = () => {
    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(null)
 
    const handleOpen = (data) => {
        setOpen(prev => !prev)
        setEditing(data)
    };


    const handleClose = () => {
        setOpen(false)
        setEditing(null)
    }

    const todo = tasks.filter(task => task.status === 'Todo')
    const inProgress = tasks.filter(task => task.status === 'In Progress')
    const completed = tasks.filter(task => task.status === 'Completed')

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex gap-2 flex-col">
                        <Typography variant="h4">
                            To Do
                        </Typography>
                        
                    {
                        todo.map(t => (
                            <div key={t.id} className="p-2 border bg-white shadow-sm">
                                <Typography variant="h5">
                                    {t.title}
                                </Typography>
                                <Typography variant="small">
                                    {t.description.slice(0, 100)}...
                                </Typography>
                                <div className='flex gap-1 justify-between items-center mt-2'>
                                    <Chip variant='outlined' color='pink' className='inline-flex rounded-full' size='sm' value={t.status} />
                                    <div className='flex gap-1 items-center justify-end'>
                                        <FaRegEdit onClick={() => handleOpen(t)} className='cursor-pointer ' />
                                        <AiOutlineDelete className='cursor-pointer ' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex gap-2 flex-col">
                        <Typography variant="h4">
                            In Progress
                        </Typography>
                    {
                        inProgress.map(t => (
                            <div key={t.id} className="p-2 border bg-white shadow-sm">
                                <Typography variant="h5">
                                    {t.title}
                                </Typography>
                                <Typography variant="small">
                                    {t.description.slice(0, 100)}...
                                </Typography>
                                <div className='flex gap-1 justify-between items-center mt-2'>
                                    <Chip variant='outlined' color='amber' className='inline-flex rounded-full' size='sm' value={t.status} />
                                    <div className='flex gap-1 items-center justify-end'>
                                        <FaRegEdit onClick={() => handleOpen(t)} className='cursor-pointer ' />
                                        <AiOutlineDelete className='cursor-pointer ' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="flex gap-2 flex-col">
                        <Typography variant="h4">
                            Completed
                        </Typography>
                    {
                        completed.map(t => (
                            <div key={t.id} className="p-2 border bg-green-50 shadow-sm">
                                <Typography variant="h5">
                                    {t.title}
                                </Typography>
                                <Typography variant="small">
                                    {t.description.slice(0, 100)}...
                                </Typography>
                                <div className='flex gap-1 justify-between items-center mt-2'>
                                    <Chip variant='outlined' color="green" className='inline-flex rounded-full' size='sm' value={t.status} />
                                    <div className='flex gap-1 items-center justify-end'>
                                        
                                        <AiOutlineDelete className='cursor-pointer ' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>
            {
                editing && (
                    <EditModal open={open} handleOpen={handleOpen} handleClose={handleClose} data={editing} />
                )
            }
        </div>
    );
};

export default TasksViewe;
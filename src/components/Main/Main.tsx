import { Chip, Typography } from '@/components/mt';
import React, { useState } from 'react';

import EditModal from '../EditModal/EditModal';
import TasksViewe from '../TasksViewe/TasksViewe';






const Main = () => {
   

    

    return (
        <div className="p-4 pt-12 lg:pt-[150px]">
            <div className="max-w-2xl mx-auto">
                <TasksViewe/>
            </div>
            
        </div>
    );
};

export default Main;
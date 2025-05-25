

import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
// import { getLocalStorage } from '../../utils/localStorage';

const TaskListNumbers = ({data,employeeId}) => {
    
  //   if (!data || !data.taskCounts) {
  //   return <div className="mt-10 text-center text-gray-500">Loading task counts...</div>;
  // }

   const { userData } = useContext(AuthContext);

  if (!userData || !userData.employees) {
    return <div className="mt-10 text-center text-gray-500">Loading employee data...</div>;
  }

  const currentEmp = userData.employees.find(emp => emp.id === employeeId);

  if (!currentEmp || !currentEmp.taskCounts) {
    return <div className="mt-10 text-center text-gray-500">Loading task counts...</div>;
  }

  const { newTask, active, completed, failed } = currentEmp.taskCounts;


  return (

    
<>
     <div className='flex mt-10 justify-between gap-5 screen'>
        <div className = ' rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>{newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

        <div className = ' rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>{active}</h2>
            <h3 className='text-xl font-medium'>Active Task</h3>
        </div>

        <div className = ' rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-3xl font-semibold'>{completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>

        <div className = ' rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-3xl font-semibold'>{failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>

   
</>
  )
}

export default TaskListNumbers
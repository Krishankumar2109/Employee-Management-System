import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../Task/TaskList'
import { useState,useEffect } from 'react'

const EmployeeDashboard = ({data,setUser}) => {

   const [employeeData, setEmployeeData] = useState(data);

  useEffect(() => {
    setEmployeeData(data); // Sync prop on mount or data change
  }, [data]);

  console.log(data)
  return (
    <div className='p-10 bg-[#1c1c1c]  h-screen'>
        <Header setUser={setUser} data={data} />
        <TaskListNumbers data={employeeData} employeeId={data.id} setEmployeeData={setEmployeeData} />
        <TaskList data={employeeData} setEmployeeData={setEmployeeData} /> 
    </div>
  )
}

export default EmployeeDashboard;
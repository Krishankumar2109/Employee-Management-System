import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data,setEmployeeData}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex mt-10 items-center justify-start gap-5 flex-nowrap w-full  bg-red'>
       
       {data.task.map((elem) => {

        if(elem.active){
            return <AcceptTask key={elem._id} data={elem} employeeId={data.id} setEmployeeData={setEmployeeData}/>
        }
        if(elem.newTask){
            return <NewTask key={elem._id} data={elem} employeeId={data.id} setEmployeeData={setEmployeeData}/>
        }
        if(elem.completed){
            return <CompleteTask key={elem._id} data={elem} employeeId={data.id} setEmployeeData={setEmployeeData}/>
        }
        if(elem.failed){
            return <FailedTask key={elem._id} data={elem} employeeId={data.id} setEmployeeData={setEmployeeData}/>
        }
        
       } )}
        
    </div>
  )
}

export default TaskList
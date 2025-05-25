import React from 'react'
import { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const {userData,setUserData} = React.useContext(AuthContext);

  const [taskTitle, setTaskTitle] = React.useState("")
  const [taskDescription,setTaskDescription] = React.useState("")
  const [taskDate,setTaskDate] = React.useState("")
  const [assignTo,setAssignTo] = React.useState("")
  const [category,setCategory] = React.useState("")


  const [newMemberName, setNewMemberName] = React.useState("")


 // const [newTask, setnewTask] = useState({})

const submitHandler = (e) => {
  e.preventDefault();

  const task = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: false,
    newTask: true,
    completed: false,
    failed: false,
  };

  const data = JSON.parse(localStorage.getItem("employees"));

  const updatedEmployees = userData.employees.map((employee) => {
      if (employee.firstName === assignTo) {
        return {
          ...employee,
          task: [...employee.task, task],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1,
            active: employee.taskCounts.active + 1,
          },
        };
      }
      return employee;
    });

console.log(updatedEmployees);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  setUserData({ ...userData, employees: updatedEmployees }); //  trigger context update

  // Reset form
  setTaskTitle("");
  setTaskDescription("");
  setTaskDate("");
  setAssignTo("");
  setCategory("");

  alert("Task Created Successfully");
};


 const addMember = () => {
    if (!newMemberName.trim()) return alert("Enter a valid name");

    const alreadyExists = userData.employees.some(
      (emp) => emp.firstName.toLowerCase() === newMemberName.toLowerCase()
    );

    if (alreadyExists) return alert("Member already exists");

    const newEmployee = {
      id: Date.now(),
      firstName: newMemberName,
      email: `${newMemberName.toLowerCase()}@example.com`,
      password: `${newMemberName.toLowerCase()}123`,
      task: [],
      taskCounts: {
        newTask: 0,
        active: 0,
        completed: 0,
        failed: 0,
      },
    };

    const updatedEmployees = [...userData.employees, newEmployee];
    const updatedData = { ...userData, employees: updatedEmployees };

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setNewMemberName("");
    alert("Member added successfully");
  };

  const deleteMember = () => {
    const updatedEmployees = userData.employees.filter(
      (emp) => emp.firstName.toLowerCase() !== newMemberName.toLowerCase()
    );

    if (updatedEmployees.length === userData.employees.length) {
      return alert("Member not found");
    }

    const updatedData = { ...userData, employees: updatedEmployees };
    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setNewMemberName("");
    alert("Member deleted successfully");
  };


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{submitHandler(e)}} action="" className='flex flex-wrap items-start w-full  justify-between' >

                <div className='w-1/2'>
                  <div>
                  <h3 className='text-sm text-gray-300 mb-0.5'>Task Title </h3>
                    <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Enter Task" />
                  </div>

                   <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input value={taskDate} onChange={ (e)=>{setTaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
               </div>

               <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                <input value={assignTo} onChange={(e)=>setAssignTo(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Employee Name" />
               </div>

               <div>
                 <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <input value={category} onChange={(e)=>setCategory(e.target.value)} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Design,Dev Etc" />
               </div>
               
                    
         </div>

                

                
                
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)} className=' w-full h-44 text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10" placeholder="Task Description"></textarea>
                <button type="submit" className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
               

               <input
            type="text"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            placeholder="Member Name"
            className="w-full mt-4 mb-2 text-sm py-2 px-3 rounded outline-none bg-transparent border-[1px] border-gray-400"
          />

          <button type="button" onClick={addMember} className='bg-blue-500 py-3 hover:bg-blue-600 px-5 rounded text-sm mt-1 w-full'>Add Member</button>
          <button type="button" onClick={deleteMember} className='bg-red-500 py-3 hover:bg-red-600 px-5 rounded text-sm mt-2 w-full'>Delete Member</button>

                </div>

              
               
            </form>
        </div>
  )
}

export default CreateTask
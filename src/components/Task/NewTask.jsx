import React, { useState, useContext } from 'react';
import { AuthContext, updateEmployeesInContext } from '../../context/AuthProvider';

const NewTask = ({ data, employeeId }) => {
  const { userData, setUserData } = useContext(AuthContext);
  const [task, setTask] = useState(data);

  const updateTaskStatus = (action) => {
    if (!userData || !userData.employees) return;

    const updatedEmployees = userData.employees.map(emp => {
      if (emp.id !== employeeId) return emp;

      const updatedTasks = emp.task.map(t => {
        if (t.taskTitle !== task.taskTitle) return t;

        let updatedTask = { ...t };

        if (action === 'accept') {
          updatedTask = { ...updatedTask, newTask: false, active: true };
        }
        if (action === 'complete') {
          updatedTask = { ...updatedTask, active: false, completed: true };
        }
        if (action === 'fail') {
          updatedTask = { ...updatedTask, active: false, failed: true };
        }

        return updatedTask;
      });

      const taskCounts = {
        newTask: updatedTasks.filter(t => t.newTask).length,
        active: updatedTasks.filter(t => t.active).length,
        completed: updatedTasks.filter(t => t.completed).length,
        failed: updatedTasks.filter(t => t.failed).length,
      };

      return { ...emp, task: updatedTasks, taskCounts };
    });

    // Update both localStorage and context
    updateEmployeesInContext(updatedEmployees, setUserData);

    // Get the updated task from the latest state for UI update
    const updatedTask = updatedEmployees
      .find(emp => emp.id === employeeId)
      ?.task.find(t => t.taskTitle === task.taskTitle);

    if (updatedTask) {
      setTask(updatedTask);
    }
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{task.category || 'Uncategorized'}</h3>
        <h4 className='text-sm'>{task.taskDate || 'No Date'}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{task.taskTitle}</h2>
      <p className='text-sm mt-2'>{task.taskDescription}</p>

      <div className="mt-4 space-x-2">
        {task.newTask && (
          <button
            className="bg-blue-600 text-white px-3 py-1 rounded"
            onClick={() => updateTaskStatus('accept')}
          >
            Accept Task
          </button>
        )}

        {task.active && (
          <>
            <button
              className="bg-green-600 text-white px-3 py-1 rounded"
              onClick={() => updateTaskStatus('complete')}
            >
              Mark as Complete
            </button>
            <button
              className="bg-yellow-600 text-white px-3 py-1 rounded"
              onClick={() => updateTaskStatus('fail')}
            >
              Mark as Failed
            </button>
          </>
        )}

        {task.completed && <p className='text-green-900 mt-2'>✅ Task Completed</p>}
        {task.failed && <p className='text-red-900 mt-2'>❌ Task Failed</p>}
      </div>
    </div>
  );
};

export default NewTask;

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { getLocalStorage } from '../../utils/localStorage';

const AllTask = () => {
   const { userData } = useContext(AuthContext);

  // Helper to calculate counts from tasks
  const calculateCounts = (tasks) => {
    const counts = {
      newTask: 0,
      active: 0,
      completed: 0,
      failed: 0,
    };

    tasks.forEach((task) => {
      if (task.newTask) counts.newTask++;
      if (task.active) counts.active++;
      if (task.completed) counts.completed++;
      if (task.failed) counts.failed++;
    });

    return counts;
  };

  return (
    <div>
      <div className="bg-[1c1c1c] p-5 rounded mt-5 h-48">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
          <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
          <h3 className="text-lg font-medium w-1/5 text-red-600">New Task</h3>
          <h5 className="text-lg font-medium w-1/5">Active Task</h5>
          <h5 className="text-lg font-medium w-1/5">Completed</h5>
          <h5 className="text-lg font-medium w-1/5">Failed</h5>
        </div>

        <div className="h-[80%] overflow-auto">
          {userData?.employees?.map((employee, idx) => {
            const counts = calculateCounts(employee.task);

            return (
              <div
                key={idx}
                className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
              >
                <h2 className="text-lg font-medium w-1/5">{employee.firstName}</h2>
                <h3 className="text-lg font-medium w-1/5 text-blue-600">{counts.newTask}</h3>
                <h5 className="text-lg font-medium w-1/5 text-yellow-400">{counts.active}</h5>
                <h5 className="text-lg font-medium w-1/5 text-green-600">{counts.completed}</h5>
                <h5 className="text-lg font-medium w-1/5 text-red-600">{counts.failed}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
// This component displays a summary of tasks for all employees.

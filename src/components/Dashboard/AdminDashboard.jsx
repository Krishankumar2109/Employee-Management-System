import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({setUser}) => {
  return (
    <div className='h-screen w-full p-7 '>
        <Header setUser={setUser} />
        <CreateTask />
        <AllTask />

        
    </div>
    
  )
}

export default AdminDashboard
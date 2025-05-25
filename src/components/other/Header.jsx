import React from 'react'

const Header = ({data="Admin",setUser}) => {

  const logoutUser = () => {
    //localStorage.clear()
    localStorage.removeItem("loggedInUser");
   // setLoggedInUserData(null);
    setUser(null);
  }
  return (
    <div className='flex justify-between items-end bg-gray-800 text-white p-4'>
        <h1 className='text- 2xl font-medium'> Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}</span>  </h1>
        <button onClick={logoutUser} className='bg-red-600 rounded-small  text-white px-5 py-2'>Logout</button>
    </div>
  )
}

export default Header
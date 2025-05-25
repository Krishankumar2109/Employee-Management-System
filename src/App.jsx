import React, { useContext } from 'react'
import {useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  
  // }, [])

const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [user, setUser] = useState(null)
  const {userData} = useContext(AuthContext)
  console.log("Data from context",userData);


useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser && userData) {
    const userDataFromStorage = JSON.parse(loggedInUser);
    setUser(userDataFromStorage.role);
    setLoggedInUserData(userDataFromStorage.data);
  }
}, [userData]); // run only when userData is available




  const handleLogin = (email, password) => {
  if (!userData) {
    alert("Data not loaded yet. Please wait...");
    return;
  }

  if (email === 'admin@example.com' && password === 'admin123') {
    setUser('admin');
    localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
  } else {
    const employee = userData.employees?.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee }));
    } else {
      alert("Invalid credentials");
    }
  }
};



  const data = useContext(AuthContext);

  console.log("Data from context",data);

  
  
  return (
    <>
    {!user ? <Login  handleLogin={handleLogin}/>: ' '}
    { user=='admin' ? <AdminDashboard setUser={setUser} data={{firstName:"Admin"}}/> : (user=='employee' ? <EmployeeDashboard setUser={setUser} data={loggedInUserData}/> : null )}
    
    </>
  )
}

export default App
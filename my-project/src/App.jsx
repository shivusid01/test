
// import {createBrowserRouter, RouterProvider,} from "react-router-dom";
// import './App.css'
// import Home from './components/Home'
// import Dashboard from './components/Dashboard'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Home />
//     },
//     {
//       path: '/dashboard',
//       element: <Dashboard />
//     }
//   ]
// )

// function App() {
//   const [count, setCount] = useState(0)

//   return (
    
//     <div>
//     <RouterProvider router={router} />
//     </div>
     
   
//   )
// }

// export default App

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const usersData = [
  { name: "Suhana", email: "suhana@example.com", age: 20 },
  { name: "Smriti", email: "smriti@example.com", age: 21 },
  { name: "Diksha", email: "diksha@example.com", age: 22 },
  
];

const UserCard = ({ name, email, age }) => {
  return (
    <div className="bg-purple-950 text-white shadow-lg rounded-2xl p-6 border border-black hover:bg-purple-400 transition duration-300">
      <p className="text-lg font-bold">Name:</p>
      <p className="mb-2">{name}</p>
      <p className="text-lg font-bold">Age:</p>
      <p className="mb-2">{age}</p>
      <p className="text-lg font-bold">Email:</p>
      <p>{email}</p>
    </div>
  );
};

const Dashboard = () => {
  const [users] = useState(usersData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
      {users.map((user, index) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
};

const Home = () => (
  <div className="text-center text-2xl font-bold p-10">Welcome to User Dashboard</div>
);

const App = () => {
  return (
    <Router>
      <div className="p-6">
        <nav className="flex justify-center space-x-6 mb-6">
          <Link className="text-white bg-black px-4 py-2 rounded hover:bg-purple-400" to="/">Home</Link>
          <Link className="text-white bg-black px-4 py-2 rounded hover:bg-purple-400" to="/dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

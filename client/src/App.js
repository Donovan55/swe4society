import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import './index.css'

// We import all the components we need in our app
import Navbar from "./components/navbar.jsx";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";
import Get from "./components/get.jsx";
 
const App = () => {
 return (
   <div className="bg-gray-900 min-h-screen">
     <Navbar />
     <Routes>
       <Route exact path="/" />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path="/get" element={<Get />} />
     </Routes>
   </div>
 );
};

export default App;

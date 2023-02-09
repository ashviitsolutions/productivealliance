import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar"
import Addpost from './components/Admin/POST/Addpost';
import Editpost from './components/Admin/POST/Editpost';
import Getpost from './components/Admin/POST/Getpost';
import Login from './components/Admin/PAGES/LOGIN/Login';
// import Home from './components/Admin/Home';
// import Protect from './components/Admin/PAGES/Protected/Protect';
import Protect from './components/Admin/PAGES/Protected/Protect';


function App() {
 
  const auth=localStorage.getItem("token")

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Protect Component={Sidebar} />} />
            <Route path="/getpost" element={<Protect Component={Getpost} />}  />
            <Route path="/addpost" element={<Protect Component={Addpost} />} />
            <Route path="/editpage" element={<Protect Component={Editpost} />} />
            <Route path="/login" element={<Login />} />  
          </Routes>
        </BrowserRouter>



    </>
  );
}

export default App;

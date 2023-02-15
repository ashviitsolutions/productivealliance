import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar"
import Addpost from './components/Admin/POST/Addpost';
import Editpost from './components/Admin/POST/Editpost';
import Getpost from './components/Admin/POST/Getpost';
import Login from './components/Admin/PAGES/LOGIN/Login';
import Protect from './components/Admin/PAGES/Protected/Protect';
import Errorpage from './components/Admin/PAGES/Error404/Errorpage';



function App() {
 
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Protect Component={Sidebar} />} />
            <Route path="/getpost" element={<Protect Component={Getpost} />}  />
            <Route path="/addpost" element={<Protect Component={Addpost} />} />
            <Route path="/editpage/:id" element={<Protect Component={Editpost} />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/*" element={<Protect Component={Errorpage} />} />  
          </Routes>
        </BrowserRouter>



    </>
  );
}

export default App;

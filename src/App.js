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
import getService from './components/Admin/Service/GetPost';
import AddPostService from "./components/Admin/Service/AddPost"
import EditPostService from './components/Admin/Service/EditPost';


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

            <Route path="/services" element={<Protect Component={getService} />}  />
            <Route path="/services/add_service" element={<Protect Component={AddPostService} />}  />
            <Route path="/services/edit_post/:id" element={<Protect Component={EditPostService} />}  />
          </Routes>
        </BrowserRouter>



    </>
  );
}

export default App;

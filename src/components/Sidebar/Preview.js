import React from 'react'
import { useState } from 'react';
import "./style.css"
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import TodayIcon from '@mui/icons-material/Today';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import MessageIcon from '@mui/icons-material/Message';
import PaidIcon from '@mui/icons-material/Paid';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import Groups2Icon from '@mui/icons-material/Groups2';
import LogoutIcon from '@mui/icons-material/Logout';
import HailIcon from '@mui/icons-material/Hail';
import images from "../img/logo.png"
// import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Sidebar() {
  const [IsOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!IsOpen);



  


  const logout = () => {
    localStorage.clear()
  }
  return (
    <>
      <div className="nav-icons" >
        {

          !IsOpen ? <MenuIcon onClick={toggle} /> :
            <CloseIcon onClick={toggle} />

        }

      </div>


      <div id={!IsOpen ? "sidebar" : "sedemobile"} className="active">

        <div className="card layer1">
          <div className="nav-icon"  style={{color:"#ffff"}}>
            <CloseIcon onClick={toggle} />
          </div>
          <div className="infobox_big avatar" id='avtar'>
            <img src={images} alt="..." style={{ height: "50px", marginTop: "10px" }} />
            <div className="item" style={{ marginTop: "5px" }}>
              <span className="title">admin</span>
              <span className="excerpt">9876543210</span>

            </div>
            <span className="toggle_sidebar close" ></span>
          </div>
          <div className="nav" style={{ marginTop: "10px" }}>

            <div className="item">
              <Link to="events.php">
                <DashboardIcon style={{ color: "#fff" }} />
                <span className="title">dashboard</span>
              </Link>
            </div>
            <div className="item">
              <Link to="events.php">
                <TodayIcon style={{ color: "#fff" }} />
                <span className="title">Events</span>
              </Link>
            </div>
            <div className="item">
              <Link to="bookings.php">
                <BeenhereIcon style={{ color: "#fff" }} />
                <span className="title">bookings</span>
              </Link>
            </div>
            <div className="item">
              <Link to="messages.php">
                <MessageIcon style={{ color: "#fff" }} />
                <span className="title">messages</span>
              </Link>
            </div>
            <div className="item">
              <Link to="payments.php">
                <PaidIcon style={{ color: "#fff" }} />
                <span className="title">payemtns</span>
              </Link>
            </div>
            <div className="item">
              <Link to="services.php">
                <MedicalServicesIcon style={{ color: "#fff" }} />
                <span className="title">services</span>
              </Link>
            </div>
            <div className="item">
              <Link to="/getpost">
                <MedicalServicesIcon style={{ color: "#fff" }} />
                <span className="title">posts</span>
              </Link>
            </div>
            <div className="item">
              <Link to="contractors.php">
                <HailIcon style={{ color: "#fff" }} />
                <span className="title">contractors</span>
              </Link>
            </div>
            <div className="item">
              <Link to="clients.php">
                <Groups2Icon style={{ color: "#fff" }} />
                <span className="title">clients</span>
              </Link>
            </div>
            <div className="item">
              <Link to="login">
                <LogoutIcon style={{ color: "#fff" }} />
                <span className="title" onClick={logout}>logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
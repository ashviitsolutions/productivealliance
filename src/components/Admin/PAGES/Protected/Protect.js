import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Protect(props) {
    const {Component}=props;
    const nav=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem("token");
        if(!login){
            nav("/login")
        }
    })
  return (
    <div>
    <Component/>
    </div>
  )
}

export default Protect
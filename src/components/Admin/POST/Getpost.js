import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import Sidebar from "../../Sidebar/Sidebar"



function Getpost() {
    const [user , setUser]=useState([])
    
    // useEffect(()=>{
    //         axios.get("Http://45.13.132.197:4000/api/post/fetch").then((res)=>{
    //             setUser(res)
    //             console.log(res)
    //         })
    // },[])
   
    useEffect(() => {
        fetch("http://45.13.132.197:4000/api/post/fetch").then((res) => {
            return res.json();
        }).then((data) => {
            setUser(data)
            console.log(data)
        })
    }, [])

    
//   const setToLocalStorage = (id, name, email) => {
//     localStorage.setItem("id", id);
//     localStorage.setItem("name", name);
//     localStorage.setItem("email", email);
//   };



    return (
        <>
        <Sidebar/>
            <div id="content">
                <div className="container-fluid">      
                    <div className="row">
                        <div className="">
                            <div className="heading float_wrapper">
                                <div className="gutter pull-left" >
                                    <h3>all posts</h3>
                                    <p>list of all add posts</p>
                                </div>
                                <div className="gutter pull-left">
                                    <Link to="/addpost">
                                        <button  className="button small primary" 
                                        type="button" name="button">Add New</button>
                                    </Link>
                                </div>
                                <span className="toggle_sidebar" ></span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="gutter">
                            <div className="card layer1 filters">
                                <div className="input_group">
                                    <select name="" id="" className="input">
                                        <option value="">status</option>
                                        <option value="">draft</option>
                                        <option value="">published</option>
                                        <option value="">trashed</option>
                                    </select>
                                    <span className="highlight"></span>
                                </div>
                                <div className="input_group">
                                    <select name="" id="" className="input">
                                        <option value="">select type</option>
                                        <option value="">Home</option>
                                        <option value="">Banner</option>
                                        <option value="">Offer Post</option>
                                        <option value="">Join Our Team</option>
                                        <option value="">Corporate Events</option>
                                        <option value="">Private Events</option>
                                        <option value="">Massage On Demand</option>
                                        <option value="">Policies</option>
                                        <option value="">Become a Member</option>
                                    </select>
                                    <span className="highlight"></span>
                                </div>
                                <div className="input_group">
                                    <input type="date" className="input" placeholder="Start Date"/>
                                        <span className="highlight"></span>
                                </div>
                                <div className="input_group pull-right" >
                                    <input type="text" className="input" placeholder="search here.."/>
                                        <span className="highlight"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="row">
                            <div className="gutter">
                                <table className="table-responsive ultra_responsive">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="md-checkbox">
                                                    <input id="i3" type="checkbox"/>
                                                        <label htmlFor="i3"></label>
                                                </div>
                                            </th>
                                            <th>Title</th>
                                            <th>Excerpt</th>
                                            <th>Created at</th>
                                            <th>Created by</th>
                                        </tr>
                                    </thead>


                                    





                                    <tbody id="post_container">
                                        <tr className="wrapper" id="tr_post_77">
                                            <td>
                                                <div className="md-checkbox">
                                                    <input id="i3" type="checkbox"/>
                                                        <label htmlFor="i3"></label>
                                                </div>
                                            </td>


                                            <td>
                                                <div className="content">
                                                    <Link to="/editpage" >
                                                        <span className="title">some title here</span>
                                                    </Link>
                                                    <div className="controls">
                                                        <Link 
                                                         className="trash_btn anchor_lite" to="/editpage">trash</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit</td>
                                            <td>2022-11-08 01:08:20</td>
                                            <td>admin</td>
                                        </tr>



                                      
                                    </tbody>


                                </table>
                            </div>
                            <div className="pagination_wrapper">
                                <ul className="pagination pull-right">
                                    <li checked>Prev</li>
                                    <li checked>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li checked>Next</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Getpost
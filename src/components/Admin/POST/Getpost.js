import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import Sidebar from "../../Sidebar/Sidebar"
import ReactPaginate from 'react-paginate';
import "./style.css"


function Getpost() {
    const [user, setUser] = useState([])

    const [data, setData] = useState(1)

    useEffect(() => {
        fetch("http://45.13.132.197:4000/api/post/fetch").then((res) => {
            return res.json();
        }).then((data) => {
            setUser(data)
            console.log(data)
        })
    }, [data])

    const Total = user.length;
  
    const handlePageClick = (data) => {
        setData(data.selected)
        console.log(data.selected)
       
    }




    return (
        <>
            <Sidebar />
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
                                        <button className="button small primary"
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
                                    <input type="date" className="input" placeholder="Start Date" />
                                    <span className="highlight"></span>
                                </div>
                                <div className="input_group pull-right" >
                                    <input type="text" className="input" placeholder="search here.." />
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
                                                <input id="i3" type="checkbox" />
                                                <label htmlFor="i3"></label>
                                            </div>
                                        </th>
                                        <th>Title</th>
                                        <th>Excerpt</th>
                                        <th>Created at</th>
                                        <th>Created by</th>
                                    </tr>
                                </thead>






                                {
                                    user.map((cur, index) => {
                                        return (
                                            <>
                                                <tbody id="post_container">
                                                    <tr className="wrapper" id="tr_post_77">
                                                        <td>
                                                            <div className="md-checkbox">
                                                                <input id="i3" type="checkbox" />
                                                                <label htmlFor="i3"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="content">
                                                                <Link to={`/editpage/${cur._id}`} >
                                                                    <span className="title">{cur.title}</span>
                                                                </Link>

                                                            </div>
                                                        </td>
                                                        <td>{cur.excerpt}</td>
                                                        <td>{cur.updatedAt}</td>
                                                        <td>admin</td>
                                                    </tr>




                                                </tbody>

                                            </>
                                        )

                                    })
                                }



                            </table>
                            <div className='pagination'  >
                            <ReactPaginate
                               
                                   previousLabel={'Previous'}
                                   nextLabel={'Next'}
                                   breakLabel={"..."}
                                   pageCount={Total/5}
                                   marginPagesDisplayed={3}
                                   pageRangeDisplayed={2}
                                   onPageChange={handlePageClick}
                                   renderOnZeroPageCount={null}
                                   containerClassName={'pagination justify-content-center py-3'}
                                   pageClassName={'page-item'}
                                   pageLinkClassName={'page-link'}
                                   previousClassName={'page-item'}
                                   previousLinkClassName={'page-link'}
                                   nextClassName={'page-item'}
                                   nextLinkClassName={'page-link'}
                                   breakClassName={'page-item'}
                                   breakLinkClassName={'page-link'}
                                   activeClassName={'active'}
               
                               />
                            </div>
                        </div>
                    </div>
                </div>
           
                </div>
           
                
         
        </>
    )
}

export default Getpost
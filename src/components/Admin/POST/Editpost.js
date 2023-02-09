
import React, { useState, useRef } from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import JoditEditor from 'jodit-react';
import Sidebar from "../../Sidebar/Sidebar"

import "./style.css"
function Editpost() {
    let title=localStorage.getItem("title")
    let select=localStorage.getItem("select")
    let image=localStorage.getItem("image")
    // let discription=localStorage.getItem("image")

    const editor = useRef(null);
    const [content, setContent] = useState('');


    const initialValues = {
        title: "",
        bodys: "",
        select: "",
        image: "",
        discription: "",
    };
    const SignupSchema = Yup.object().shape({
        // title: Yup.string().required("Required"),
        // bodys: Yup.string().email("Invalid email").required("Required"),
        // select: Yup.string().required("Required"),
        // image: Yup.string().required("Required"),
        // discription: Yup.string().required("Required"),

    });
    const onSubmit = (values, { resetForm }) => {
        // alert("clicked")
        console.log(values)
        resetForm({ values: "" });
        const bodyFormData = new FormData();
        bodyFormData.append("title", values.title)
        bodyFormData.append("bodys", values.bodys)
        bodyFormData.append("select", values.select)
        bodyFormData.append("image", values.image)
        bodyFormData.append("discription", values.content)
        axios.put("45.13.132.197:4000/api/post/create", bodyFormData)
            .then((res) => {
                console.log(res)

            })



    }
     



    return (
        <>
        <Sidebar/>
            <div id="content">
                <div className="container-fluid">
                    <div className="row">
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignupSchema}
                            onSubmit={onSubmit}

                        >

                            {({ errors, touched, setFieldValue }) => (

                                <Form>
                                    <div className="">
                                        <div className="heading float_wrapper">
                                            <div className="gutter pull-left" >
                                                <h3>Edit post</h3>
                                            </div>
                                            <span className="toggle_sidebar" ></span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="gutter">
                                                <div className="card layer1">
                                                    <div className="inner">
                                                        <label className="card_label" htmlFor="">General InhtmlFormation</label>
                                                        <div className="input_group">
                                                            <Field
                                                               value={title}
                                                                className="input"
                                                                name="title"
                                                                type="text"
                                                                placeholder="Title"
                                                            />
                                                            {errors.title && touched.title ? (
                                                                <div>{errors.title}</div>
                                                            ) : null}
                                                            <span className="highlight"></span>
                                                        </div>
                                                        <div className="input_group">
                                                            <div className="input_group">
                                                                <Field
                                                                    value={select}
                                                                    className="input"
                                                                    name="bodys"
                                                                    type="text"
                                                                    placeholder="Excerpt"
                                                                />
                                                                {errors.bodys && touched.bodys ? (
                                                                    <div>{errors.bodys}</div>
                                                                ) : null}
                                                                <span className="highlight"></span>
                                                            </div>
                                                        </div>
                                                        <div className="input_group">
                                                            <label htmlFor="" className="static">Description</label>
                                                            <div className='editor' style={{ marginTop: "2vh" }}>
                                                                <JoditEditor
                                                                    ref={editor}
                                                                    value={content}
                                                                    onBlur={newContent => setContent(newContent)}
                                                                    onChange={(e) => setContent(e.target.value)}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="gutter">
                                                <div className="card layer1">
                                                    <div className="inner">
                                                        <label className="card_label" htmlFor="">Post Actions</label>
                                                        <div className="input_group">
                                                            <button id="publish_btn"
                                                                className="primary square button" type="submit"
                                                                name="button">publish</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card layer1">
                                                    <div className="inner">
                                                        <label className="card_label" htmlFor="">Select Type</label>
                                                        <div className="input_group">
                                                            <Field name="select" as="select" className="input" value={select}>
                                                                <option value={'select type'}>select type</option>
                                                                <option value={'Home'}>Home</option>
                                                                <option value={'Banner'}>Banner</option>
                                                                <option value={'select'}>Offer Post</option>
                                                                <option value={'select'}>Join Our Team</option>
                                                                <option value={'select'}>Corporate Events</option>
                                                                <option value={'select'}>Private Events</option>
                                                                <option value={'select'}>Massage On Demand</option>
                                                                <option value={'select'}>Policies</option>
                                                                <option value={'select'}>Become a Member</option>
                                                            </Field>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card layer1">
                                                    <div className="inner">
                                                        <label htmlFor="" className="card_label">Attachments</label>
                                                        <input
                                                            value={image}
                                                            type="file"
                                                            placeholder="Excerpt"
                                                            onChange={(e) => {
                                                                setFieldValue('image', e.target.files[0])
                                                            }
                                                            }
                                                        />
                                                        {errors.image && touched.image ? (
                                                            <div>{errors.image}</div>
                                                        ) : null}



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </Form>
                            )}

                        </Formik>







                    </div>
                </div>
            </div>
        </>
    )
}

export default Editpost
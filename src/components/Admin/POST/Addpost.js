
import React, { useState, useRef } from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import JoditEditor from 'jodit-react';
import "./style.css"
import { useNavigate } from 'react-router-dom';
import Sidebar from "../../Sidebar/Sidebar"
function Addpost() {
    const nav=useNavigate()

    const editor = useRef(null);


    const initialValues = {
        title: "",
        body: "",
        excerpt: "",
        image: "",
        description: "",
    };
    const SignupSchema = Yup.object().shape({
        title: Yup.string().required("Required"),
        body: Yup.string().required("Required"),
        excerpt: Yup.string().required("Required"),
        // image: Yup.string().required("Required"),
        // discription: Yup.string().required("Required"),

    });
    const onSubmit = async(values, { resetForm }) => {
        console.log(values)
        resetForm({ values: "" });
        const bodyFormData = new FormData();
        bodyFormData.append("title", values.title)
        bodyFormData.append("body", values.body)
        bodyFormData.append("excerpt", values.excerpt)
        bodyFormData.append("image", values.image)
        bodyFormData.append("description", values.description)
        axios.post("http://45.13.132.197:4000/api/post/create", bodyFormData)
            .then((res) => {
                console.log(res)
                if(res.status===200){
                    nav("/getpost")
                }

            })

    }
    const config = {
        readonly: false,
        height: 400,
                                                 
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

                            {({ errors, touched, setFieldValue , values }) => (

                                <Form>
                                    <div className="">
                                        <div className="heading float_wrapper">
                                            <div className="gutter pull-left" >
                                                <h3>Add post</h3>
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
                                                                    className="input"
                                                                    name="body"
                                                                    type="text"
                                                                    placeholder="Excerpt"
                                                                />
                                                                {errors.body && touched.body ? (
                                                                    <div>{errors.body}</div>
                                                                ) : null}
                                                                <span className="highlight"></span>
                                                            </div>
                                                        </div>
                                                        <div className="input_group">
                                                            <label htmlFor="" className="static">Description</label>
                                                            <div className='editor' style={{ marginTop: "4vh", height: "40vh" }}>
                                                                <Field name="description" as="texarea">
                                                                    <JoditEditor
                                                                    name="description"
                                                                    ref={editor}
                                                                    value={values.description}
                                                                    config={config}
                                                                    onBlur={(newContent) => {
                                                                        setFieldValue('description', newContent);
                                                                    }}
                                                                    onChange={(newContent) => {
                                                                        setFieldValue('description', newContent);
                                                                    }}
                                                                    />
                                                                </Field>

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
                                                        <Field name="excerpt" as="select" className="input">
                                                        <option value="">Select Type</option>
                                                        <option value="Home">Home</option>
                                                        <option value="Banner">Banner</option>
                                                        <option value="Offer Post">Offer Post</option>
                                                        <option value="Join Our Team">Join Our Team</option>
                                                        <option value="Corporate Events">Corporate Events</option>
                                                        <option value="Private Events">Private Events</option>
                                                        <option value="Massage On Demand">Massage On Demand</option>
                                                        <option value="Policies">Policies</option>
                                                        <option value="Become a Member">Become a Member</option>
                                                      </Field>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card layer1">
                                                    <div className="inner">
                                                        <label htmlFor="" className="card_label">Attachments</label>
                                                        <input
                                                           name='image'
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

export default Addpost
import React, { useState as UseState } from 'react';
import { IoMdCall } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { GoMail } from 'react-icons/go'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'
import './contactForm.css';

export default function contactForm() {

    const [loginData, setData] = UseState({
        phoneNumber: "",
        password: "",
    })

    const handeleSubmit = () => {
        alert('Thank You for using our service')
    }

    return (
        <div className="contact-form">
            <div className="container">
                <div className="contact-card">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="contact-info-card">
                                <div className="row">
                                    <div className="contact-info-header">Contact Information</div>
                                    <div className="row">
                                        <div className="col-2"><ImLocation /></div>
                                        <div className="col-10"><p>D34 College Street, Kolkata, <br /> West Bengal - 700012 </p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2"><IoMdCall /></div>
                                        <div className="col-10"><p> 8999989999</p></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-2"><GoMail /></div>
                                        <div className="col-10"><p> support@bookshelf.web.app</p>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <i className="col-2">
                                            <h1><a href="https://www.facebook.com" target="_blank"><FaFacebookSquare /></a></h1>
                                        </i>
                                        <i className="col-2">
                                            <h1><a href="https://www.instagram.com" target="_blank"><FaInstagramSquare /></a></h1>
                                        </i>
                                        <i className="col-2">
                                            <h1><a href="https://www.twitter.com" target="_blank"><FaTwitterSquare /></a></h1>
                                        </i>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7 card-form">
                            <div className="contact-form-container">
                                <div className="form">
                                    <form className="" noValidate onSubmit={handeleSubmit} >
                                        <div className="row text-center">
                                            <div className="col-xs-12 col-md-6 text-start">
                                                <input
                                                    className="contact-input-field"
                                                    style={{ marginBlock: '10px' }}
                                                    name="number"
                                                    variant="outlined"
                                                    autoComplete="phone number"
                                                    required
                                                    fullWidth
                                                    id="email"
                                                    placeholder="Enter Fullname 👨🏽‍🦲"
                                                    value={loginData.phoneNumber}
                                                    onChange={(e) => setData({ ...loginData, phoneNumber: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-xs-12 col-md-6 text-start">
                                                <input
                                                    className="contact-input-field"
                                                    name="password"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    placeholder="Enter Email ✉️"
                                                    type="password"
                                                    id="password"
                                                    value={loginData.password}
                                                    onChange={(e) => setData({ ...loginData, password: e.target.value })}
                                                />
                                            </div>
                                            <div className="col-xs-12 text-start">
                                                <textarea
                                                    className="contact-input-field"
                                                    name="message"
                                                    variant="outlined"
                                                    required
                                                    fullWidth
                                                    placeholder="Enter your message"
                                                    type="textarea"
                                                    id="message"
                                                    rows="5"
                                                    value={loginData.password}
                                                    onChange={(e) => setData({ ...loginData, password: e.target.value })}
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                className="submit-btn"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

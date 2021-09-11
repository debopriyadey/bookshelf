import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { GoMail } from 'react-icons/go'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'

import './footer.css'

export default function footer() {
    return (
        <>
            <svg viewBox="0 0 960 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 37L80 28.7C160 20.3 320 3.70001 480 1.20001C640 -1.29999 800 10.3 880 16.2L960 22V148H880C800 148 640 148 480 148C320 148 160 148 80 148H0V37Z" fill="#1C2955" />
            </svg>
            <div className="footer">
                <div className="mx-2 mx-md-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-5">
                            <div className="heading">About Us</div>
                            <p>
                                Something very magical can happen when you read a book and we help you to experience this magic. 
                                We value our customer needs and provide our services, which includes <b>Online/Offline Shopping</b>, <b>Selling old books</b> and <b>Library facility</b>.
                                Be the part of India's most trusted bookstore and enjoy reading.
                            </p>
                            <div className="socials">
                                <i className="col-2">
                                    <div className="icon"><a href="https://www.facebook.com" target="_blank"><FaFacebookSquare /></a></div>
                                </i>
                                <i className="col-2">
                                    <div className="icon"><a href="https://www.instagram.com" target="_blank"><FaInstagramSquare /></a></div>
                                </i>
                                <i className="col-2">
                                    <div className="icon"><a href="https://www.twitter.com" target="_blank"><FaTwitterSquare /></a></div>
                                </i>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 px-md-4 px-lg-5 ">
                            <div className="contact-info-header">Our Sponser</div>
                            <button className="sponcer-btn"><a href="https://www.istebits.com/" target="_blank" style={{textDecoration: "none", color: "inherit"}}>ISTEBITS</a></button>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-info-header">Contact Information</div>
                            <div className="row">
                                <div className="col-2"><ImLocation /></div>
                                <div className="col-10"><p>D34 College Street, Kolkata, <br /> West Bengal - 700043 </p></div>
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
                        </div>
                    </div>
                </div>
                <hr />
                <div className="justify-content-between p-2 px-4">
                    <p className="text-center mt-2"> © 2021 Bookshelf. All rights reserved </p>
                </div>
            </div>
        </>
    )
}

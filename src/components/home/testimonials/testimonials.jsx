import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from "react-elastic-carousel";
import './testimonials.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];


export default function testimonials() {
    return (
        <div>
            <div className="container testimonials">
                <div className="sec-header">
                    <h2 className="heading" style={{ color: '#1f1f1f' }}> Testimonials</h2>
                    <p className="desc" style={{ color: '#1f1f1f' }}> Listen to what our customers have to say </p>
                </div>
                <Carousel
                    itemPadding={[0, 30]}
                    transitionMs={400}
                    enableAutoPlay
                    autoPlaySpeed={2500}
                    className="attraction-carousel my-5"
                    breakPoints={breakPoints}
                >
                    <div className="testimonial-card">
                        <div className="row">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-3">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="testimonial-img" />
                                </div>
                                <div className="col-sm-12 col-md-8 mx-2 align-item-center">
                                    <p className="testimonial-name">Nikki Parmenter</p>
                                    <small className="testimonial-designation">7 January 2021</small>
                                </div>
                            </div>
                            <div className="row testimonial-review my-2">
                                <p>I am using Bookshelf services many time's I found they provide good services
                                    timely delivery good customer care service comparative rates.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="row">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-3">
                                    <img src="https://images.unsplash.com/photo-1508810301179-d8da058a3d29?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="testimonial-img" />
                                </div>
                                <div className="col-sm-12 col-md-8 mx-2 align-item-center">
                                    <p className="testimonial-name">Anamika Rajput</p>
                                    <small className="testimonial-designation">2 April 2021</small>
                                </div>
                            </div>
                            <div className="row testimonial-review my-2">
                                <p>I had a great experience with bookshelf. They have an ample collection of books in thier reserves.
                                    Nice and fast delivery within the promise time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="row">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-3">
                                    <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="testimonial-img" />
                                </div>
                                <div className="col-sm-12 col-md-8 mx-2 align-item-center">
                                    <p className="testimonial-name">Shanvi Singhania</p>
                                    <small className="testimonial-designation">19 February 2021</small>
                                </div>
                            </div>
                            <div className="row testimonial-review my-2">
                                <p>The library facility is really awesome. I have taken the plus membership.
                                    I can easily issue books from bookshelf and read them in peace.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="row">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-3">
                                    <img src="https://images.unsplash.com/photo-1595502124338-950db27ea1c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="testimonial-img" />
                                </div>
                                <div className="col-sm-12 col-md-8 mx-2 align-item-center">
                                    <p className="testimonial-name">Deepankar Ghosh</p>
                                    <small className="testimonial-designation">10 July 2021</small>
                                </div>
                            </div>
                            <div className="row testimonial-review my-2">
                                <p>I sold many of my old books here. I was really easy process and I got a good return on them as well
                                    Thanks for your services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <div className="row">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-3">
                                    <img src="https://images.unsplash.com/flagged/photo-1571367032831-eabd75a52baf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="testimonial-img" />
                                </div>
                                <div className="col-sm-12 col-md-8 mx-2 align-item-center">
                                    <p className="testimonial-name">Rajkukar Sinha</p>
                                    <small className="testimonial-designation">27 March 2021</small>
                                </div>
                            </div>
                            <div className="row testimonial-review my-2">
                                <p>Bookshelf is good performed. I get fast delivery in village also.
                                I am delighted to find such good services. Thanks to them i can study in village easily</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div >
    )
}

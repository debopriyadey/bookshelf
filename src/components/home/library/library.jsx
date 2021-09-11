import React from 'react'
import './library.css'

export default function library() {
    return (
        <div className="library">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-9">
                        <div className="sec-header">
                            <div className="library-helper">Don't want to buy? Then just borrow!</div>
                            <div className="heading library-heading">Bookshelf Library At Your Service</div>
                            <div className="desc library-desc">
                                Reading is to mind what exercise is to body.
                                To make available to the readers community books through a single-window, we offer library service as well.
                                You just have to be a bookshelf member to avail this service.
                            </div>
                            <button className="explore-btn"><a href="/services">Explore →</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

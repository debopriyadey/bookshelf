import React from 'react'
import './newsletter.css'

export default function newsletter() {
    return (
        <div className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <div className="subscribe-now">SUBSCRIBE NOW</div>
                            <p className="content-tuned">Subscribe to our newsletter and stay tuned with future updates</p>
                        </div>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Enter email to subscribe" />
                            <span className="input-group-btn" />
                            <button className="btn" type="submit" style={{color: '#1f1f1f'}}>Subscribe Now</button>
                        </div>
                        <div className="text-center">
                            <a className="unsubscribe-link" href="#">Would you like to unsubscribe?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import Zoom from 'react-reveal/Zoom';

import './benifits.css'
import collection from '../../../svg/collection1.svg'
import delivery from '../../../svg/delivery.svg'
import offers from '../../../svg/offers.svg'
import exchange from '../../../svg/exchange.svg'

export default function benifits() {
    return (
        <div>
            <div className="benefits my-5">
                <div className="container">
                    <div className="sec-header">
                        <h2 className="heading" style={{ color: '#1f1f1f' }}> Why Choose Us</h2>
                        <p className="desc" style={{ color: '#1f1f1f' }}> Bookshelf is here to endow you with <br /> an extensive range of benefits. </p>
                    </div>
                    {/* <div className="row align-items-center">
                        <div className="col-md-12 col-lg-6 benefit-main">
                            <div className="benefit-heading pt-2"> <span>Why Choose Us</span> </div>
                            <p className="text-center py-4 benefit-desc">Bookshelf is here to endow you with <br /> an extensive range of benefits.
                                Whether it's last-minute rent payment.</p>
                        </div>
                    </div> */}
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-lg-6">
                            <div className="farmer text-center" style={{ marginLeft: '-1px' }}>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="row">
                                <Zoom>
                                    <div className="col-sm-12 col-md-5 p-t-30 my-2">
                                        <div className="benifit-card benifit-active">
                                            <img src={collection} width="50" height="50" alt="benefit" />
                                            <p className="benefit-card-title mt-3 mb-1">Ample Collection</p>
                                            <p className="benefit-card-desc">We provide a huge range of books in different categories starting from just ₹89. Visit our store or buy online.
                                            </p>
                                        </div> 
                                    </div>
                                    <div className="col-sm-12 col-md-5 p-t-30 my-2 benifit-card-middle">
                                        <div className="benifit-card">
                                            <img src={delivery} width="50" height="50" alt="benefit" />
                                            <p className="benefit-card-title mt-3 mb-1">Home Delivery</p>
                                            <p className="benefit-card-desc">If you don't want to, no need to go outside. We deliver at your doorstep. Stay calm and keep reading.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5 p-t-30 my-2">
                                        <div className="benifit-card">
                                            <img src={offers} width="50" height="50" alt="benefit" />
                                            <p className="benefit-card-title mt-3 mb-1">Exciting Offers</p>
                                            <p className="benefit-card-desc">We know what you crave for, be our valuable customer and enjoy exciting range of offers with us.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-5 p-t-30 my-2">
                                        <div className="benifit-card">
                                            <img src={exchange} width="50" height="50" alt="benefit" />
                                            <p className="benefit-card-title mt-3 mb-1">Return & Exchange</p>
                                            <p className="benefit-card-desc">If first few pages don't excite you much, we've got you covered. Return or Exchange in just few steps.
                                            </p>
                                        </div>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

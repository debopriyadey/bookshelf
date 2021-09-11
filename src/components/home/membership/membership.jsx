import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiBadgeCheck } from 'react-icons/hi'

import './membership.css'

import Reading from '../../../images/3dmodel.webp'

export default function membership() {
    return (
        <div className="container my-5 membership">
            <div className="sec-header">
                <h2 className="heading" style={{ color: '#1f1f1f' }}> Membership </h2>
                <p className="desc" style={{ color: '#1f1f1f' }}> Become a member to get extra benifit </p>
            </div>
            <div className="row promos justify-content-center">
                <div className="col-sm-0 col-md-0 col-lg-2 promo-img">
                    <img src={Reading} alt="i am reading" />
                </div>
                <div className="col-sm-12 col-md-3  col-lg-2 promo">
                    <div className="promo-title">Basic</div>
                    <div className="promo-price">
                        <span className="price-symbol">₹</span>
                        <span className="price">49</span>
                        <span className="price-month">/mo</span>
                    </div>
                    <div className="mt-4 promo-benefits">
                        <p><HiBadgeCheck /> Issue <strong>1 Book</strong>/ month</p>
                        <p><HiBadgeCheck /> <strong>5% Off</strong> on all purchase</p>
                        <p><HiBadgeCheck /> Exchange period of <strong>4 days</strong></p>
                    </div>
                    <NavLink
                        exact
                        to="/login"
                    >
                        <button className="promo-btn">Get Started →	</button>
                    </NavLink>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2 promo">
                    <div className="promo-title">Plus</div>
                    <div className="promo-price">
                        <span className="price-symbol">₹</span>
                        <span className="price">79</span>
                        <span className="price-month">/mo</span>
                    </div>
                    <div className="mt-4 promo-benefits">
                        <p><HiBadgeCheck /> Issue <strong>2 Book</strong>/ month</p>
                        <p><HiBadgeCheck /> <strong>7% Off</strong> on all purchase</p>
                        <p><HiBadgeCheck /> Exchange period of <strong>1 week</strong></p>
                    </div>
                    <NavLink
                        exact
                        to="/login"
                    >
                        <button className="promo-btn">Get Started →	</button>
                    </NavLink>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-2 promo">
                    <div className="promo-title">Premium</div>
                    <div className="promo-price">
                        <span className="price-symbol">₹</span>
                        <span className="price">99</span>
                        <span className="price-month">/mo</span>
                    </div>
                    <div className="mt-4 promo-benefits">
                        <p><HiBadgeCheck /> Issue <strong>3 Book</strong>/ month</p>
                        <p><HiBadgeCheck /> <strong>10% Off</strong> on all purchase</p>
                        <p><HiBadgeCheck /> Exchange period of <strong>2 weeks</strong></p>
                    </div>
                    <NavLink
                        exact
                        to="/login"
                    >
                        <button className="promo-btn">Get Started →	</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

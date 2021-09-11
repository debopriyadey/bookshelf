import React from 'react'
import { NavLink } from 'react-router-dom'
import Shop from '../../../svg/shop.svg'
import Fade from 'react-reveal/Fade';

import '../servicesHeader/header.css'
import './shop.css'

export default function shop() {
    return (
        <div className="container service-shop">
            <div className="row align-items-center">
                <Fade left>
                    <div className="col-sm-12 col-md-6">
                        <img src={Shop} alt="shop-img" />
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-sm-12 col-md-6">
                        <div className="shop-title-bold">Shop Seamlessly</div>
                        <div className="shop-title-helper">Shop online/offline as you wish</div>
                        <p>
                            We have got many stores accross West Bengal.
                            But don't you worry, if your are not in West Bengal or just not willing to waste your time visiting our store.
                            We will deliver your favourite books at your doorstep. Just visit our shop section to explore.
                        </p>
                        <NavLink
                            exact
                            to="/shop"
                        >
                            <button className="service-shop-btn">Buy</button>
                        </NavLink>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

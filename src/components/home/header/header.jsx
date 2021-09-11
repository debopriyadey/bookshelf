import React from 'react';
import { Hidden } from '@material-ui/core';
import Flip from 'react-reveal/Flip';

import './header.css'
import { NavLink } from 'react-router-dom';

export default function header() {
    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-12 col-lg-6 mt-sm-5 mt-md-5">
                        <div id="content" className="px-md-2 header-content">
                            <Flip top>
                                <h1 className="header-text">Supercharge your life.</h1>
                            </Flip>
                            <Flip top>
                                <h4 className="header-desc">Decorate your shelfs with beautiful scripts!</h4>
                            </Flip>
                            <NavLink
                                exact
                                to="/services"
                            >
                                <button className="start-btn mt-4">
                                    Start here
                                    <span className="mb-0">  → </span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-md-0 col-lg-6 d-none d-lg-block">
                    </div>
                </div>
                <div className="row align-items-center justify-content-between">
                    <div className="col-sm-12 col-md-8 mt-sm-5 mt-md-5">
                        <div className="stats">
                            <p className="stats-desc"></p>
                            <ul>
                                <li><div></div></li>
                                <li><div></div></li>
                                <li><div></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-0 col-md-4 d-none d-lg-block">
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import Fade from 'react-reveal/Fade';

import bg from '../../../images/Services_Header.webp'

import './header.css'

export default function header() {
    return (
        <div className="container services">
            <div className="row">
                <Fade left>
                    <div className="col-md-12 col-lg-6">
                        <div className="row services-info">
                            <div className="service-header-helper">
                                We Provide Exclusive Services
                            </div>
                            <div className="service-header-bold">
                                Just For You!
                            </div>
                            <p className="service-header-desc">
                                To earn the respect of our customers, we respect those customers. Therefore we provide what our customers wants, to value their needs.
                                <br />
                                Explore our services and be our valuable customer.
                            </p>
                        </div>
                        <div className="row go-down">
                            <h1 className="ca3-scroll-down-link"><FaAngleDoubleDown /></h1>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-md-0 col-lg-6 service-img">
                        <img src={bg} width="500" height="600" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

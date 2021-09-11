import React from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import Zoom from 'react-reveal/Zoom';

import './header.css'

export default function header() {
    return (
        <div className="shop">
            <div className="container">
                <Zoom>
                    <div className="row align-items-center justify-content-between shop-header">
                        <div className="col-md-8 col-lg-5 mt-sm-5 mt-md-5">
                            <div id="content" className="px-md-2 shop-header-content">
                                <div className="shop-header-helper">Get Your Favorite Books</div>
                                <div className="shop-heading-bold"> In Just Few Clicks!</div>
                                <p className="mx-1">Its's this simple</p>
                            </div>
                        </div>
                        <div className="col-md-0 col-lg-6 d-none d-lg-block">
                        </div>
                    </div>
                    <div className="row go-down">
                        <h1 className="ca3-scroll-down-link"><FaAngleDoubleDown /></h1>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/services/servicesHeader/header'
import Shop from '../components/services/shop/shop'
import Sell from '../components/services/sell/sell'
import Footer from '../components/footer/footer'

export default function Services() {
    return (
        <div>
            <Navbar />
            <Header />
            <Shop />
            <Sell />
            <Footer />
        </div>
    )
}

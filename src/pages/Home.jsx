import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/home/header/header'
import Benifits from '../components/home/benefits/benifits'
import Library from '../components/home/library/library'
import Membership from '../components/home/membership/membership'
import Testimonials from '../components/home/testimonials/testimonials'
import Footer from '../components/footer/footer'
import Newsletter from '../components/home/newsletter/newsletter'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Benifits />
            <Library />
            <Membership />
            <Newsletter />
            <Testimonials />
            <Footer />
        </div>
    )
}

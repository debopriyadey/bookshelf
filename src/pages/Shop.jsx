import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/shop/shopHeader/header'
import Books from '../components/shop/books/books'

export default function Shop() {
    return (
        <div>
            <Navbar />
            <Header />
            <Books />
        </div>
    )
}

import React, { useState as UseState, useEffect as UseEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner';
import Carousel from "react-elastic-carousel";

import './book.css'

const breakPoints = [

    { width: 200, itemsToShow: 1 },
    { width: 300, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 550, itemsToShow: 5 },
    { width: 970, itemsToShow: 7 },
    { width: 1200, itemsToShow: 11 },
];

export default function books() {

    const [Books, setBooks] = UseState([])

    var options = {
        method: 'GET',
        url: 'https://google-books.p.rapidapi.com/volumes',
        params: { key: 'AIzaSyAOsteuaW5ifVvA_RkLXh0mYs6GLAD6ykc' },
        headers: {
            'x-rapidapi-host': 'google-books.p.rapidapi.com',
            'x-rapidapi-key': 'b2bcc81cd5msh7bd347d7ba10befp168e94jsnce8a3ac290f4'
        }
    };


    const fetchBook = () => {
        axios.request(options)
            .then(res => setBooks(res.data.items))
            .catch(e => console.log(e))
    }

    UseEffect(() => {
        fetchBook()
    }, [])

    // console.log(Books)

    return (
        <div className="books my-5">
            <div className="row category-container justify-content-between">
                <div className="col-xs-4 col-sm-4 col-md-3 col-lg-2">
                    <div className="category-title-btn mx-2">
                        <p className="category-title">Categories</p>
                    </div>
                </div>
                <div className="col-xs-7 col-sm-8 col-md-9 col-lg-10">
                    <Carousel
                        // itemPadding={[0, 30]}
                        transitionMs={400}
                        enableAutoPlay
                        autoPlaySpeed={2500}
                        // className="attraction-carousel my-5"
                        breakPoints={breakPoints}
                    >
                        <div className="category-btn">
                            <p className="category">All</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Sports</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Novel</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Friction</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Romance</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Thriller</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Action</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Classics</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Comic</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Graphic</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Detective</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">History</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Mystery</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Fantasy</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Crime</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Horror</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Literary</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Sci-Fi</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Suspense</p>
                        </div>
                        {/* <div className="category-btn">
                            <p className="category">Biographies</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Autobiographies</p>
                        </div> */}
                        <div className="category-btn">
                            <p className="category">Cookbooks</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Essays</p>
                        </div>
                        <div className="category-btn">
                            <p className="category">Memoir</p>
                        </div>

                    </Carousel>
                </div>
            </div>
            <hr />
            <div className="container">
                <h3 className="top-title">Top Sellers </h3>
                {
                    Books.length == 0 ?
                        <Loader
                            type="BallTriangle"
                            color="#FFDD40"
                            className="loader"
                        /> :
                        <div className="row justify-content-evenly">
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="http://books.google.com/books/content?id=Cy8nyLknYLIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" />
                                </div>
                                <div className="book-name">
                                    Random Book
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        John Dick
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
                                </div>
                                <div className="book-name">
                                    American Marxism
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Mark R. Levin
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/41NJL8M8XzS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
                                </div>
                                <div className="book-name">
                                    We Were Liars
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        E. Lockhart
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/514aE49swxL._SX330_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="book-name">
                                    The Song of Achilles
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Madeline Miller
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/41iYr6o753L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
                                </div>
                                <div className="book-name">
                                    A Promised Land
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Barack Obama
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/41ZhmNOH8ZL._SX326_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="book-name">
                                    My Own Words
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Ruth Bader Ginsburg
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            {/* {Books.map((book) => {
                                <div className="col-3">
                                    {console.log(book.volumeInfo)}
                                    <div className="book-img">
                                        <img src={book.volumeInfo.imageLinks.thumbnail} />
                                    </div>
                                    <div className="book-name">
                                        {book.volumeInfo.title}
                                    </div>
                                    <div className="book-author">
                                        <span>by</span>
                                        {book.volumeInfo.authors[0]}
                                    </div>
                                    <button className="book-buy-btn"><a href="/login">Buy</a></button>
                                </div>
                            })} */}
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/51S-OSUUyzL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
                                </div>
                                <div className="book-name">
                                    Shatter Me
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Tahereh Mafi
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/51SUqssIb2L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
                                </div>
                                <div className="book-name">
                                    Ugly Love
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Colleen Hoover
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/413prN9ImIL._SX309_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="book-name">
                                    A Little Life
                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>

                                        Hanya Yanagihara
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <div className="col-xs-5 col-md-4 col-lg-3 book-container">
                                <div className="book-img-container">
                                    <img className="book-img" src="https://images-na.ssl-images-amazon.com/images/I/51BqKV6TlpL._SX331_BO1,204,203,200_.jpg" />
                                </div>
                                <div className="book-name">
                                    The Nightingale                                </div>
                                <div className="book-author">
                                    <small>
                                        <span>by</span>
                                        Kristin Hannah
                                    </small>
                                </div>
                                <button className="book-buy-btn"><a href="/login">Buy</a></button>
                            </div>
                            <h1 className="my-5"> More Books Comming Soon </h1>
                        </div>
                }
            </div>
        </div>
    )
}

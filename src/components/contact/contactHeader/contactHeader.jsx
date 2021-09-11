import React from 'react'
import Slide from 'react-reveal/Slide'

import './contactHeader.css'
import ContactForm from '../contactForm/contactForm'

export default function contactHeader() {
    return (
        <>
            <div className="contact">
                <div className="row">
                    <Slide top>
                        <div className="heading">Get In Touch</div>
                        <p>We are happy to answer questions about our platform or any commerce-relaed matter.
                            <br /> Please feel free to reach out.
                        </p>
                    </Slide>
                </div>
            </div>
            <ContactForm />
        </>
    )
}

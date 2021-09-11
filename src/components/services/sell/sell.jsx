import React, { useState as UseState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from 'react-reveal/Fade';

import Sell from '../../../svg/sell.svg'
import SellingForm from '../sellingForm/sellingForm'
import '../servicesHeader/header.css'
import './sell.css'
import { Hidden } from '@material-ui/core';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const UseStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function sell() {
    const classes = UseStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = UseState(getModalStyle);
    const [open, setOpen] = UseState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={classes.paper}>
            <SellingForm />
        </div>
    );

    return (
        <div className="container service-sell">
            <div className="row align-items-center">
                <Hidden mdUp>
                    <Fade right>
                        <div className="col-sm-12 col-md-6 my-5 mb-2">
                            <img src={Sell} alt="sell-img" />
                        </div>
                    </Fade>
                </Hidden>
                <Fade left>
                    <div className="col-sm-12 col-md-6">
                        <div className="sell-title-bold">Sell Old Books</div>
                        <div className="sell-title-helper">Sell old books and get good returns</div>
                        <p>You can easily exhange your already read books with justified price.
                            You just have to fill the form with minimum information about the book which your willing to sell and then login to proceed.
                            After our team approve your book the amount will be credited to your bank account.
                            Also we do not store any of your data with us so you don't have to worry about your privacy.
                        </p>
                        <button className="service-sell-btn" onClick={handleOpen} >Sell</button>
                        <Modal
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            {body}
                        </Modal>
                    </div>
                </Fade>
                <Hidden xsDown>
                    <Fade right>
                        <div className="col-sm-12 col-md-6">
                            <img src={Sell} alt="sell-img" />
                        </div>
                    </Fade>
                </Hidden>
            </div>
        </div>
    )
}

import { useRef as UseRef, useState as UseState } from "react";
import { PermMedia } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { ImCancelCircle } from 'react-icons/im'

import "./sellingForm.css";

export default function sellingForm() {
    // const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = UseRef();
    const [file, setFile] = UseState(null);

    const [loginData, setData] = UseState({
        phoneNumber: "",
        password: "",
    })

    const submitHandler = async (e) => {
        e.preventDefault();
    };

    const handeleSubmit = () => {
        alert('Thank You for using our service')
    }

    return (
        <div className="sell-form-container">
            <NavLink
                exact
                to="/"
            >
                <h1><ImCancelCircle className="sell-cancel-model" /></h1>
            </NavLink>
            <div className="row">
                <div class="col-sm-12 col-md-4">
                    <div className="shareWrapper">
                        {file ? (
                            <div className="book-preview">
                                <img className="preview-img" src={URL.createObjectURL(file)} alt="" />
                                <ImCancelCircle className="sell-cancel-svg" onClick={() => setFile(null)} />
                            </div>
                        ) :
                            <form className="shareBottom" onSubmit={submitHandler}>
                                <div className="shareOptions">
                                    <label htmlFor="file" className="shareOption">
                                        <p>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                        {/* <PermMedia htmlColor="tomato" className="shareIcon" /> */}
                                        <span className="shareOptionText sell-pic-btn">
                                            Choose File
                                        </span>
                                        <input
                                            style={{ display: "none" }}
                                            type="file"
                                            id="file"
                                            accept=".png,.jpeg,.jpg"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </label>

                                </div>
                            </form>
                        }
                    </div>
                </div>
                <div className="col-sm-12 col-md-8">
                    <form className="" noValidate onSubmit={handeleSubmit} >
                        <div className="row text-center">
                            <div className="col-xs-12 col-md-6 text-start">
                                <input
                                    className="selling-form-input-field"
                                    style={{ marginBlock: '10px' }}
                                    name="name"
                                    variant="outlined"
                                    autoComplete="name"
                                    required
                                    fullWidth
                                    id="email"
                                    placeholder="Book Name"
                                    value={loginData.phoneNumber}
                                    onChange={(e) => setData({ ...loginData, phoneNumber: e.target.value })}
                                />
                            </div>
                            <div className="col-xs-12 col-md-6 text-start">
                                <input
                                    className="selling-form-input-field"
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    placeholder="Author Name"
                                    type="password"
                                    id="password"
                                    value={loginData.password}
                                    onChange={(e) => setData({ ...loginData, password: e.target.value })}
                                />
                            </div>
                            <div className="col-xs-12 text-start">
                                <textarea
                                    className="selling-form-input-field"
                                    name="message"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    placeholder="Write A Short Description"
                                    type="textarea"
                                    id="message"
                                    rows="5"
                                    value={loginData.password}
                                    onChange={(e) => setData({ ...loginData, password: e.target.value })}
                                />
                            </div>
                        </div>
                        <small>Your book will be sold at 30% less than the written price</small>
                    </form>
                </div>
            </div>
            <div className="row my-2 text-center">
                <NavLink
                    exact
                    to="/login">

                    <button className="sell-submit-button" type="submit">
                        Proceed
                    </button>
                </NavLink>
            </div>
        </div>
    );
}
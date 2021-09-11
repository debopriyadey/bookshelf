import React, { useState as UseState } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa'

import './signup.css';

export default function signup() {

  const [open, setOpen] = UseState(false);
  const [errorMsg, setErrorMsg] = UseState('')
  const [signupData, setData] = UseState({
    name: '',
    phoneNumber: '',
    emailId: '',
    password: '',
    confirmPassword: '',
    tnc: false,
  })

  const validatePassword = (e) => {
    setData({ ...signupData, confirmPassword: e.target.value })
    if (signupData.password != e.target.value) {
      setErrorMsg('Password did not match')
    } else {
      setErrorMsg('')
    }
  }

  const handeleSubmit = () => {
    if (signupData.name == '' || signupData.phoneNumber == '' || signupData.emailId == '' || signupData.password == '') {
      alert('Please enter all field')
    } else if (signupData.password != signupData.confirmPassword) {
      alert('Recheck your confirm password')
    }
    else if (signupData.tnc == false) {
      alert('Please accept out Terms and Conditions and Privacy Policy')
    } else {
      alert('Thank You ' + signupData.name + ' for using our service')
    }
  }
  return (
    <div className="signup">
      <div className="row signup-card">
        <div className="col-sm-12 col-md-0 col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8MTA3NTMyNjZ8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="" height='630' width='630' className="signup-card-visual" />
          <h3 className="back-arrow"><a href="/"><FaArrowCircleLeft /></a></h3>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 signup-card-form">
          <div className="container">
            <div className="signup-form-container">
              <div className="signup-form-logo mb-4">
                <p className="signup-logo-text mb-0">Get's Started!</p>
                <small>Already have an account? <span className="link"><a href="/login">Sign in</a></span></small>
              </div>
              <div className="form">
                <form className="" noValidate onSubmit={handeleSubmit} >
                  <div className="text-center">
                    <div className="col-xs-12  text-start">
                      <input
                        className="signup-input-field"
                        style={{ marginBlock: '10px' }}
                        name="name"
                        variant="outlined"
                        autoComplete="name"
                        required
                        fullWidth
                        id="name"
                        placeholder="Enter name"
                        value={signupData.name}
                        onChange={(e) => setData({ ...signupData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="signup-input-field"
                        name="email"
                        variant="outlined"
                        autoComplete="email"
                        required
                        fullWidth
                        placeholder="EmailId"
                        type="email"
                        id="password"
                        value={signupData.emailId}
                        onChange={(e) => setData({ ...signupData, emailId: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="signup-input-field"
                        name="number"
                        variant="outlined"
                        autoComplete="phone number"
                        required="required"
                        fullWidth
                        placeholder="Phone Number"
                        id="number"
                        value={signupData.phoneNumber}
                        onChange={(e) => setData({ ...signupData, phoneNumber: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="signup-input-field"
                        name="password"
                        variant="outlined"
                        required="required"
                        fullWidth
                        placeholder="Password"
                        type="password"
                        id="password"
                        value={signupData.password}
                        onChange={(e) => setData({ ...signupData, password: e.target.value })}
                      />
                    </div>
                    <div className="col-xs-12  text-start">
                      <input
                        className="signup-input-field"
                        name="confirm password"
                        variant="outlined"
                        required="required"
                        fullWidth
                        placeholder="Confirm Password"
                        type="password"
                        id="confirm password"
                        value={signupData.confirmPassword}
                        onChange={(e) => validatePassword(e)}
                      />
                      <p className="confirm-pass-error">{errorMsg}</p>
                    </div>
                    <div className="col-xs-12 text-checkbox mt-3">
                      <input className="checkbox-field mb-4 mx-2" type="checkbox" onChange={(e) => setData({ ...signupData, tnc: e.target.checked })} />
                      <p className="checkbox-label">
                        I agree to the <span className="link">Terms and Conditions </span>and <span className="link">Privacy Policy </span>
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-xs-5 mt-3">
                        <button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          className="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                      {/* <div className="col-xs-5 mt-3">
                        <button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                          className="submit"
                        >
                          Back
                        </button>
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


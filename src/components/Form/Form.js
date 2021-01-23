import React from 'react'

export default function Form() {
    return (
        <div className="login">
            <form className="login__form">
                <div className="login__form__title">
                    <h1>Login</h1>
                </div>
                <div>
                    <h2>Create an Account</h2>
                    <br />
                    <p>If you do not have a user ID and password, please enter the information below and select “Continue” to proceed with registration</p>
                </div>
                <div className="login__form__content">
                    <label htmlFor="fname">First name:</label><br /> 
                    <input type="text" id="fname" name="fname" /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" name="lname" /><br />
                    <label for="verification">Please select verification method:</label><br />
                    <input type="text" id="verification" name="verification" /><br />
                    <label htmlFor="ssn">SSN/SIN (Last 4 characters only):</label><br />
                    <input type="text" id="ssn" name="ssn" /><br />
                    <label htmlFor="pcode">Postal Code:</label><br />
                    <input type="text" id="pcode" name="pcode" /><br />
                    <button className="btn-cancel">Cancel</button> <button className="btn-continue">Continue</button>
                </div>
            </form>
        </div>
    )
}

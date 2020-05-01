import React from 'react';
import '../../../src/assets/styles/styles.scss';


export default () => {
    return (
        <>
            {/* card component */}
            <div className="card">
                <h2>Sign In</h2>
                <form>
                    <div className="row">
                        <label>User Name:</label>
                        <input type="text"></input>
                    </div>

                    <div className="row">
                        <label>Password:</label>
                        <input type="text"></input>
                    </div>

                    <p>Forgot Passowrd?</p>

                    <div className="row">
                        <button className="btnPrimary">Sign In</button>
                    </div>

                    <p>Not a member? <a href="#">Sign Up instead</a></p>
                </form>

            </div>
        </>
    );
}
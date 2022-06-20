import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return(
        <>
        <form onSubmit={ () => {}}>
            <div>
                <label> First Name: </label>
                <input type="text" onChange= { (e) => setFirstName(e.target.value) } />
                { firstName.length < 2 ? (<p>First name must be at least 2 characters</p>) : null }
            </div>
            <div>
                <label> Last Name: </label>
                <input type="text" onChange= { (e) => setLastName(e.target.value) } />
                { lastName.length < 2 ? (<p>Last name must be at least 2 characters</p>) : null }
            </div>
            <div>
                <label> Email: </label>
                <input type="text" onChange= { (e) => setEmail(e.target.value) } />
                { email.length < 5 ? (<p>Email must be at least 5 characters</p>) : null }
            </div>
            <div>
                <label> Password: </label>
                <input type="password" onChange= { (e) => setPassword(e.target.value) } />
                { password.length < 8 ? (<p>Password must be at least 8 characters</p>) : null }
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="password" onChange= { (e) => setConfirmPassword(e.target.value) } />
                { confirmPassword !== password ? (<p>Passwords must match</p>) : null }
            </div>
            <input type="submit" value="Create User" />
        </form>
            <div>
                <h2>
                    Your Form Data
                </h2>
                <p>
                    First Name: { firstName }
                </p>
                <p>
                    Last Name: { lastName }
                </p>
                <p>
                    Email: { email }
                </p>
                <p>
                    Password: { password }
                </p>
                <p>
                    Confirm Password: { confirmPassword }
                </p>
            </div>
        </>
        
    );
};


export default UserForm;

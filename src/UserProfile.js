import React from "react";

function UserProfile({name, location, age, email, message}) {
    return (
        <div>
            <h1>User Portal</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Age: {age}</h3>
            <h3>Email: {email}</h3>
            <p>Please provide user details to proceed: {message}</p>
            <button>Sign up</button>
        </div>
    );
}

export default UserProfile;
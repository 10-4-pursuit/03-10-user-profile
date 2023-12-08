import React from "react";

function UserProfile({name, age, dateOfBirth, location}) {
    return (
        <div>
            <h2>React User Profile</h2>
            <p>Name: {name}</p>
            <p>D.O.B: {dateOfBirth}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};

export default UserProfile;
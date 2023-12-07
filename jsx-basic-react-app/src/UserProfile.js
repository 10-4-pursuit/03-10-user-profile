import React from 'react';

const UserProfile = (props) => {

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {props.name}</p>
            <p>Location: {props.location}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserProfile
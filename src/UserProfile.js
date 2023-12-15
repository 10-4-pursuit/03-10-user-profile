import React from 'react'

function UserProfile (props) {
    return (
        <h1>Hi {props.name}, do you still live in {props.location}?</h1>
    )
}

export default UserProfile
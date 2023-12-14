import React from 'react'

function UserProfile(props) {
    return (
        <div>
            <h1>{props.name} from {props.location}</h1>
        </div>
    )
}

export default UserProfile;
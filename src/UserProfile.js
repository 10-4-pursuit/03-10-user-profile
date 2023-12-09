import Raect from 'react';

function UserProfile(props) {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Location: {props.location}</h2>
        </div>
    )
}
export default UserProfile;
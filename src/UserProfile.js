function UserProfile(props) {
    return (
    <h1>{ props.name } { props.location }</h1>
    )
}

export default UserProfile;


// 3. Return a JSX element that displays the user's name and location.
// 4. Render `UserProfile` in `App.js`, passing sample name and location as props.
import React from "react";

const UserProfile = ({ prop }) => {
	if (!prop) {
		return null;
	}

	const { name, location } = prop;
  

return(
	<div>
		<h1>User Profile</h1>
		<p>Name: {name}</p>
		<p>Location: {location}</p>
	</div>
);
};
export default UserProfile;
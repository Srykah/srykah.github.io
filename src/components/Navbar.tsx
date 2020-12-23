import React from "react";
import { Link } from "react-router-dom";

export function Navbar(): React.ReactElement {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/my-games">Games I made</Link>
			<Link to="/games-played">Games I played</Link>
		</nav>
	);
}

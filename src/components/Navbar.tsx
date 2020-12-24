import React from "react";
import { Link } from "react-router-dom";

export function Navbar(): React.ReactElement {
	return (
		<div className="tabs is-medium is-centered">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/my-games">Games I made</Link>
				</li>
				<li>
					<Link to="/games-played">Games I played</Link>
				</li>
			</ul>
		</div>
	);
}

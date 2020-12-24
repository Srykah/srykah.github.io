import React from "react";
import { TabNavLink } from "./TabNavLink";

export function Navbar(): React.ReactElement {
	return (
		<div className="tabs is-medium is-centered">
			<ul>
				<TabNavLink to="/" label="Home" exact />
				<TabNavLink to="/my-games" label="Games I made" />
				<TabNavLink to="/games-played" label="Games I played" />
			</ul>
		</div>
	);
}

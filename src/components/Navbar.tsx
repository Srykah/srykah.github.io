import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";

export function Navbar(): React.ReactElement {
	const [isMyGamesDropdownShown, setIsMyGamesDropdownShown] = useState<boolean>(
		false
	);
	const showMyGamesDropdown = (): void => {
		setIsMyGamesDropdownShown(true);
	};
	const hideMyGamesDropdown = (): void => {
		setIsMyGamesDropdownShown(false);
	};

	const [
		isGamesPlayedDropdownShown,
		setIsGamesPlayedDropdownShown,
	] = useState<boolean>(false);
	const showGamesPlayedDropdown = (): void => {
		setIsGamesPlayedDropdownShown(true);
	};
	const hideGamesPlayedDropdown = (): void => {
		setIsGamesPlayedDropdownShown(false);
	};

	return (
		<nav
			className="navbar is-transparent"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand">
				<button
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="mainNavbar"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</button>
			</div>

			<div id="mainNavbar" className="navbar-menu">
				<div className="navbar-start">
					<NavLink
						className="navbar-item"
						activeClassName="is-active"
						to="/"
						exact
					>
						Home
					</NavLink>

					<div
						className={classNames("navbar-item", "has-dropdown", {
							"is-active": isMyGamesDropdownShown,
						})}
						onMouseEnter={showMyGamesDropdown}
						onMouseLeave={hideMyGamesDropdown}
					>
						<div className="navbar-link">Games I made</div>
						<div className="navbar-dropdown">
							<Link className="navbar-item" to="/my-games/video-games">
								Video games
							</Link>
							<Link className="navbar-item" to="/my-games/board-games">
								Board games
							</Link>
						</div>
					</div>

					<div
						className={classNames("navbar-item", "has-dropdown", {
							"is-active": isGamesPlayedDropdownShown,
						})}
						onMouseEnter={showGamesPlayedDropdown}
						onMouseLeave={hideGamesPlayedDropdown}
					>
						<div className="navbar-link">Games I played</div>
						<div className="navbar-dropdown">
							<Link className="navbar-item" to="/games-played/video-games">
								Video games
							</Link>
							<Link className="navbar-item" to="/games-played/board-games">
								Board games
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

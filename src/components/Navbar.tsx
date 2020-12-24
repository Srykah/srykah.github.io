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
			className="navbar has-background-black has-text-light"
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
						className="navbar-item has-background-black has-text-light"
						activeClassName="is-active"
						to="/"
						exact
					>
						Home
					</NavLink>

					<div
						className={classNames(
							"navbar-item",
							"has-dropdown",
							"has-background-black",
							{
								"is-active": isMyGamesDropdownShown,
							}
						)}
						onMouseEnter={showMyGamesDropdown}
						onMouseLeave={hideMyGamesDropdown}
					>
						<div className="navbar-link has-background-black has-text-light">
							Games I made
						</div>
						<div className="navbar-dropdown has-background-black">
							<Link
								className="navbar-item has-background-black has-text-light"
								to="/my-games/video-games"
							>
								Video games
							</Link>
							<Link
								className="navbar-item has-background-black has-text-light"
								to="/my-games/board-games"
							>
								Board games
							</Link>
						</div>
					</div>

					<div
						className={classNames(
							"navbar-item",
							"has-dropdown",
							"has-background-black",
							{
								"is-active": isGamesPlayedDropdownShown,
							}
						)}
						onMouseEnter={showGamesPlayedDropdown}
						onMouseLeave={hideGamesPlayedDropdown}
					>
						<div className="navbar-link has-background-black has-text-light">
							Games I played
						</div>
						<div className="navbar-dropdown has-background-black">
							<Link
								className="navbar-item has-background-black has-text-light"
								to="/games-played/video-games"
							>
								Video games
							</Link>
							<Link
								className="navbar-item has-background-black has-text-light"
								to="/games-played/board-games"
							>
								Board games
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

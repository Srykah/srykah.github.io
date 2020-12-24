import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import classNames from "classnames";

interface TabNavLinkProps {
	to: string;
	label: string;
	exact?: boolean;
}

export function TabNavLink({
	to,
	label,
	exact,
}: TabNavLinkProps): React.ReactElement {
	const match = useRouteMatch({
		path: to,
		exact: exact ?? false,
	});
	return (
		<li className={classNames({ "is-active": match != null })}>
			<Link to={to}>{label}</Link>
		</li>
	);
}

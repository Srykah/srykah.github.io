import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bulma/css/bulma.min.css";

document.getElementsByTagName("html")[0].className = "has-background-dark";
const root = document.getElementById("root");
if (root?.className !== undefined) {
	root.className = "has-text-light";
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	root
);

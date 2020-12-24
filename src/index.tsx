import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bulma/bulma.sass";
import "../node_modules/bulmaswatch/solar/bulmaswatch.scss";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

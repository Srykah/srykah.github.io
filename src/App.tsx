import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GamesPlayed } from "./pages/GamesPlayed";
import { Home } from "./pages/Home";
import { MyGames } from "./pages/MyGames";

function App(): React.ReactElement {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/games-played">
						<GamesPlayed />
					</Route>
					<Route path="/my-games">
						<MyGames />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

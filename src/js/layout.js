import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import { Home } from "./views/home";
import { Character } from "./views/character";
import { Vehicle } from "./views/vehicle";
import { Planet } from "./views/planet";
import { Navbar } from "./component/navbar";

const Layout = () => {

	return (
		<div>
			 <BrowserRouter >
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/character/:theid">
							<Character />
						</Route>
						<Route exact path="/vehicle/:theid">
							<Vehicle />
						</Route>
						<Route exact path="/planet/:theid">
							<Planet />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

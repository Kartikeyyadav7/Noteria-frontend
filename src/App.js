import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/home/home";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Header />
				<Switch>
					<div className="App">
						<Route path="/" exact component={Home} />
						<Route path="/signup" exact component={SignUp} />
						<Route path="/login" exact component={Login} />
						<Route path="/dashboard" exact component={Dashboard} />
					</div>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;

import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LTE from "./pages/LTE";
import Fibre from "./pages/Fibre";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./store";

function App() {
	return (
		<Store>
			<Router>
				<div className="container-fluid p-0 m-0">
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/lte" exact element={<LTE />} />
						<Route path="/fibre" exact element={<Fibre />} />
						<Route path="/signup" exact element={<SignUp />} />
						{/* <Home /> */}
					</Routes>
				</div>
			</Router>
		</Store>
	);
}

export default App;

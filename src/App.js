import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
	return (
		<React.Fragment>
			<div className="container-fluid p-0 m-0">
				<Home />
			</div>
		</React.Fragment>
	);
}

export default App;

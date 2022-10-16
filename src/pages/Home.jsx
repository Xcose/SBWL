import React from "react";
import Hero from "../Components/Home/Hero";
import Fibre from "../Components/Home/Fibre";
import LTE from "../Components/Home/Lte";
import Contact from "../Components/Home/Contact";

function Home() {
	return (
		<React.Fragment>
			<div
				data-bs-spy="scroll"
				data-bs-target="#siteNav"
				data-bs-offset="0"
				className="scrollspy-example"
				tabindex="0"
			>
				<Hero />
				<Fibre />
				<LTE />
				<Contact />
			</div>
		</React.Fragment>
	);
}

export default Home;

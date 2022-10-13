import React from "react";
import Hero from "../Components/Home/Hero";

function Home() {
	return (
		<React.Fragment>
			<div
				data-bs-spy="scroll"
				data-bs-target="#siteNav"
				data-bs-offset="0"
				class="scrollspy-example"
				tabindex="0"
			>
				<Hero />
			</div>
		</React.Fragment>
	);
}

export default Home;

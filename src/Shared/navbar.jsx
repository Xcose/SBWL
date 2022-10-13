import React, { useState } from "react";
import logo from "../images/Logo2.png";

const SiteNav = () => {
	const [isDark, setIsDark] = useState(false);

	const changeNavbarBackground = () => {
		if (window.scrollY >= window.outerHeight - 200) {
			setIsDark(true);
		} else {
			setIsDark(false);
		}
	};

	window.addEventListener("scroll", changeNavbarBackground);

	return (
		<nav
			class={`navbar navbar-expand-lg ${
				isDark ? "bg-dark" : "bg-transparent"
			} position-fixed w-100`}
			id="siteNav"
		>
			<div class="container">
				<a class="navbar-brand text-white" href="#home">
					<img src={logo} alt="" width="35" height="35" />
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav ms-auto">
						<li class="nav-item">
							<a
								class="nav-link active btn btn-nav border-0 rounded-pill px-5"
								aria-current="page"
								href="#home"
							>
								SIGN UP
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default SiteNav;

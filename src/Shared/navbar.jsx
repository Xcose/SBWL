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
			className={`navbar navbar-expand-lg ${
				isDark ? "bg-dark" : "bg-transparent"
			} position-fixed w-100`}
			id="siteNav"
		>
			<div className="container">
				<a className="navbar-brand text-white" href="#home">
					<img src={logo} alt="" width="35" height="35" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a
								className="nav-link active btn btn-nav border-0 rounded-pill px-5"
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
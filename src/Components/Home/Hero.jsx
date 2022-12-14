import React from "react";
import SiteNav from "../../Shared/navbar";
import phone from "../../images/kindpng_699290.png";
import blob from "../../images/blob.svg";
import blob1 from "../../images/blob(2).svg";
import blob2 from "../../images/blob(5).svg";
import skyline from "../../images/Untitled.svg";
import skyline2 from "../../images/Untitled-2.svg";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="vh-100 p-0 m-0" id="home">
			<img
				src={skyline2}
				className="w-100 position-absolute bottom-0 start-50 translate-middle-x m-0"
			/>
			<img
				src={skyline}
				className="w-100 position-absolute bottom-0 start-50 translate-middle-x m-0"
			/>
			{/* navigation bar */}
			<SiteNav />
			<div className="h-100 text-white row g-0">
				{/* call to action */}
				<div className="col-12 col-md-6 h-100">
					<div className="position-relative top-50 start-50 translate-middle text-center d-block d-md-none">
						<img
							src={blob1}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100"
						/>
						<img
							src={blob}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100"
						/>
						<img
							src={blob2}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100"
						/>
						<img
							src={phone}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-75"
						/>
					</div>
					<div className="position-relative top-50 start-50 translate-middle text-center">
						<p className="display-1 text-center title">SBWL</p>
						<p
							className="display-1 text-center title"
							style={{ color: "#f9b850" }}
						>
							DATA
						</p>
						<Link to="/signup">
							<span className="btn btn-lg btn-callToAction rounded-pill px-5 text-white">
								SIGN UP
							</span>
						</Link>
					</div>
				</div>
				<div className="col-12 col-md-6 h-100 position-relative d-none d-md-block">
					<img
						src={blob1}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-100"
					/>
					<img
						src={blob}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-100"
					/>
					<img
						src={blob2}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-100"
					/>
					<img
						src={phone}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-75"
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;

import React from "react";
import SiteNav from "../../Shared/navbar";
import BGI from "../../images/adrien-olichon-ilVYjf0J378-unsplash.jpg";
import redSquare from "../../images/XM.svg";
import phone from "../../images/kindpng_699290.png";
import blob from "../../images/blob.svg";
import blob1 from "../../images/blob(2).svg";
import blob2 from "../../images/blob(4).svg";

function Hero() {
	return (
		<div className="vh-100" id="home">
			<div className="h-100 text-white row">
				{/* navigation bar */}
				<SiteNav />
				{/* call to action */}
				<div className="col-12 col-md-6 h-100">
					<div className="position-relative top-50 start-50 translate-middle text-center">
						<p className="display-1 text-center title">SBWL</p>
						<p
							className="display-1 text-center title"
							style={{ color: "#f9b850" }}
						>
							DATA
						</p>
						<a
							href="#"
							className="btn btn-lg btn-callToAction rounded-pill px-5"
						>
							SIGN UP
						</a>
					</div>
				</div>
				<div className="col-12 col-md-6 h-100 position-relative">
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

import React from "react";
import SiteNav from "../Shared/navbar";
import phone from "../images/kindpng_699290.png";
import blob from "../images/blob.svg";
import blob1 from "../images/blob(2).svg";
import blob2 from "../images/blob(5).svg";

const LTE = () => {
	return (
		<div
			className="lte-section d-flex align-items-stretch flex-row"
			style={{ minHeight: "100vh" }}
		>
			{/* navigation bar */}
			<SiteNav />
			<div className="w-50 div1 position-relative">
				<div className="position-relative top-50 start-50 translate-middle text-center h-100">
					<img
						src={blob1}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-50"
					/>
					<img
						src={blob}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-50"
					/>
					<img
						src={blob2}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-50"
					/>
					<img
						src={phone}
						alt="..."
						className="position-absolute top-50 start-50 translate-middle w-50"
					/>
				</div>
				<div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100">
					<p className="display-1 text-center title">LTE</p>
					<p className="display-6 text-center title">
						Connect anywhere at any time
					</p>
				</div>
			</div>
			<div className="w-50">
				<div className="row position-relative top-50 start-50 translate-middle">
					<div className="col-12 col-md-6">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">Month-to-Month (No Contract)</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">One month role over</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">No out-of-bundle data</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">
								LTE ready, just insert simcard into device and you are ready
							</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LTE;

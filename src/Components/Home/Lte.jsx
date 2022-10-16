import React from "react";
import oct from "../../images/Oct1.svg";
import laptop from "../../images/kindpng_450792.png";
import Openserve from "../../images/os.png";
import Metro from "../../images/metrofibre-networx-logo-2.png";

function Lte() {
	return (
		<div className="p-5" id="lte" style={{ minHeight: "100vh" }}>
			<div className="row text-white p-5">
				<div className="col-12">
					<div className="row">
						<div className="col-12 col-md-4">
							<p className="display-1 title">LTE</p>
							<div className="position-relative align-middle h-75">
								<img
									src={oct}
									alt="..."
									className="position-absolute top-50 start-50 translate-middle w-100"
								/>
								<img
									src={laptop}
									alt="..."
									className="position-absolute top-50 start-50 translate-middle w-100"
								/>
							</div>
						</div>
						<div className="col-12 col-md-8">
							<div className="col-12 col-md-8">
								<div className="bg-lte-text rounded-2 p-2 m-4">
									<p className="sub-title">Month-to-Month (No Contract)</p>
									<p>
										News write-ups offer a great way to let clients know about
										new products and services, events, awards, and more.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-8 offset-md-4">
								<div className="bg-lte-text rounded-2 p-2 m-4">
									<p className="sub-title">One month role over</p>
									<p>
										News write-ups offer a great way to let clients know about
										new products and services, events, awards, and more.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-8">
								<div className="bg-lte-text rounded-2 p-2 m-4">
									<p className="sub-title">No out-of-bundle data</p>
									<p>
										News write-ups offer a great way to let clients know about
										new products and services, events, awards, and more.
									</p>
								</div>
							</div>
							<div className="col-12 col-md-8 offset-md-4">
								<div className="bg-lte-text rounded-2 p-2 m-4">
									<p className="sub-title">
										LTE ready, just insert simcard into device and you are ready
									</p>
									<p>
										News write-ups offer a great way to let clients know about
										new products and services, events, awards, and more.
									</p>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-3 offset-md-5">
							<a
								href="#"
								className="btn btn-lg btn-callToAction2 rounded-pill px-5 my-5 text-white"
							>
								View Deals
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Lte;

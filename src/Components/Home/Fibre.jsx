import React from "react";
import oct from "../../images/Oct.svg";
import Vuma from "../../images/vuma1.png";
import Openserve from "../../images/os.png";
import Metro from "../../images/metrofibre-networx-logo-2.png";
import { Link } from "react-router-dom";

function Fibre() {
	return (
		<div className="p-5" id="fibre" style={{ minHeight: "100vh" }}>
			<div className="row text-white p-5">
				<div className="col-12">
					<p className="display-1 title">Fibre</p>
				</div>
				{/* Desktop Version */}
				<div className="col-12 col-md-4">
					<div className="position-relative h-100">
						<div className=" d-none d-md-block">
							<img
								src={oct}
								alt="..."
								className="position-absolute top-50 start-50 translate-middle w-100"
							/>
							<img
								src={Vuma}
								alt="..."
								className="position-absolute top-50 start-50 translate-middle w-75"
							/>
						</div>
						<div className=" d-block d-md-none">
							<img src={oct} alt="..." className="" />
							<img
								src={Vuma}
								alt="..."
								className="position-absolute top-50 start-50 translate-middle w-75"
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-4 text-center position-relative">
					<div className="position-relative">
						<img src={oct} alt="..." className="w-100" />
						<img
							src={Openserve}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100"
						/>
					</div>
					<Link to="/fibre">
						<div className="btn btn-lg btn-callToAction rounded-pill px-5 my-5 d-none d-md-block">
							View Deals
						</div>
					</Link>
				</div>
				<div className="col-12 col-md-4 position-relative">
					<div className=" d-none d-md-block">
						<img
							src={oct}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100"
						/>
						<img
							src={Metro}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-75"
						/>
					</div>
					<div className="d-block d-md-none">
						<img src={oct} alt="..." className="" />
						<img
							src={Metro}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-75"
						/>
					</div>
				</div>
				<div className="col-12 d-block d-md-none text-center">
					<Link to="/fibre">
						<div className="btn btn-lg btn-callToAction rounded-pill px-5 my-5">
							View Deals
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Fibre;

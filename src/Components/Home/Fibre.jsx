import React from "react";
import oct from "../../images/Oct.svg";
import Vuma from "../../images/vuma1.png";
import Openserve from "../../images/os.png";
import Metro from "../../images/metrofibre-networx-logo-2.png";
import PowerLine from "../../images/NicePng_electricity-png_267873.png";
import { Link } from "react-router-dom";

function Fibre() {
	return (
		<div
			className="p-5 position-relative"
			id="fibre"
			style={{ minHeight: "100vh" }}
		>
			<img
				src={PowerLine}
				style={{ zINdex: "1" }}
				className="w-100 position-absolute bottom-0 start-50 translate-middle-x m-0"
			/>
			<div className="row text-white p-5" style={{ zIndex: "2" }}>
				<div className="col-12" style={{ zIndex: "2" }}>
					<p className="display-1 title">Fibre</p>
				</div>
				{/* Desktop Version */}
				<div className="col-12 col-md-4">
					<div className="position-relative h-100">
						<div className=" d-none d-md-block">
							<img
								src={oct}
								alt="..."
								className="position-absolute top-50 start-50 translate-middle w-100 neon"
							/>
							<img
								src={Vuma}
								alt="..."
								className="position-absolute top-50 start-50 translate-middle w-75"
							/>
						</div>
						<div className=" d-block d-md-none">
							<img src={oct} alt="..." className="neon" />
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
						<img src={oct} alt="..." className="w-100 neon" />
						<img
							src={Openserve}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100"
						/>
					</div>
					<Link to="/fibre" className="d-none d-md-block">
						<div className="btn btn-lg btn-callToAction rounded-pill px-5 my-5 text-white h-100">
							View Deals
						</div>
					</Link>
				</div>
				<div className="col-12 col-md-4 position-relative">
					<div className=" d-none d-md-block">
						<img
							src={oct}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-100 neon"
						/>
						<img
							src={Metro}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-75"
						/>
					</div>
					<div className="d-block d-md-none">
						<img src={oct} alt="..." className="neon" />
						<img
							src={Metro}
							alt="..."
							className="position-absolute top-50 start-50 translate-middle w-75"
						/>
					</div>
				</div>
				<div
					className="col-12 d-block d-md-none text-center"
					style={{ zIndex: "2" }}
				>
					<Link to="/fibre">
						<div className="btn btn-lg btn-callToAction rounded-pill px-5 my-5 text-white">
							View Deals
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Fibre;

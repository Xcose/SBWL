import React, { useEffect, useState, useRef } from "react";
import SiteNav from "../Shared/navbar";
import phone from "../images/kindpng_699290.png";
import blob from "../images/blob.svg";
import blob1 from "../images/blob(2).svg";
import blob2 from "../images/blob(5).svg";
import axios from "axios";
import Providers from "../Components/Fibre/Providers";
import Services from "../Components/Fibre/Services";

const Fibre = () => {
	const [fibres, setFibres] = useState([]);
	const [providers, setProviders] = useState([]);
	let [provider, setProvider] = useState();
	let [counter, setCounter] = useState(0);
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			getFibreProviders();
			return; // 👈️ return early if first render
		}
	}, [provider]);

	function getFibres(selectedProvider) {
		axios
			.get(
				"/fibres?populate=*&filters[fibre_service_providers][Name][$eq]=" +
					selectedProvider
			)
			.then((response) => {
				setFibres(response.data.data);
			})
			.catch((err) => {
				if (err) {
					console.log("no fibres");
				}
			});
	}

	function getFibreProviders() {
		axios
			.get("/fibre-service-providers")
			.then((response) => {
				setProviders(response.data.data);
			})
			.catch((err) => {
				if (err) {
					console.log("No Providers");
				}
			});
	}

	function SelectProvider(selectedProvider) {
		getFibres(selectedProvider);
		setProvider(selectedProvider);
		setCounter(1);
	}
	function back() {
		setCounter(counter - 1);
	}

	return (
		<div
			className="fibre-section d-flex align-items-stretch flex-row row  m-0 g-0"
			style={{ minHeight: "100vh" }}
		>
			<div className="col-12">
				{/* navigation bar */}
				<SiteNav />
			</div>
			<div className="col-12 col-md-6 position-relative">
				{/* Desktop */}
				<div className="d-none d-md-block">
					<div className="text-center h-100">
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
						<p className="display-1 text-center title">Fibre</p>
						<p className="display-6 text-center title">
							Connect using the ultra fast connection
						</p>
					</div>
				</div>
				{/* mobile */}
				<div className="d-block d-md-none">
					<div className="text-center h-100">
						<img src={blob1} alt="..." className="w-50" />
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
						<p className="display-1 text-center title">Fibre</p>
						<p className="display-6 text-center title">
							Connect using the ultra fast connection
						</p>
					</div>
				</div>
			</div>
			<div className="col-12 col-md-6 d-flex flex-column m-0">
				<div className="h-100 flex-grow-1">
					{
						{
							0: (
								<Providers
									providers={providers}
									SelectProvider={SelectProvider}
								/>
							),
							1: <Services fibres={fibres} back={back} />,
						}[counter]
					}
				</div>
			</div>
			<div className="col-12 p-0 m-0 d-flex flex-column">
				<div className="row position-relative top-50 start-50 translate-middle g-0 text-center flex-grow-1">
					<div className="col-12 col-md-3">
						<div className="p-2 h-100 d-flex align-items-center">
							<div>
								<p className="sub-title">Month-to-Month (No Contract)</p>
								<p>
									News write-ups offer a great way to let clients know about new
									products and services, events, awards, and more.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="p-2 h-100 d-flex align-items-center">
							<div>
								<p className="sub-title">One month role over</p>
								<p>
									News write-ups offer a great way to let clients know about new
									products and services, events, awards, and more.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="p-2 h-100 d-flex align-items-center">
							<div>
								<p className="sub-title">No out-of-bundle data</p>
								<p>
									News write-ups offer a great way to let clients know about new
									products and services, events, awards, and more.
								</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-3">
						<div className="p-2 h-100 d-flex align-items-center">
							<div>
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
		</div>
	);
};

export default Fibre;

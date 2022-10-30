import React, { useState, useEffect, useRef } from "react";
import SiteNav from "../Shared/navbar";
import phone from "../images/kindpng_699290.png";
import blob from "../images/blob.svg";
import blob1 from "../images/blob(2).svg";
import blob2 from "../images/blob(5).svg";
import axios from "axios";
import Providers from "../Components/LTE/Providers";
import Categories from "../Components/LTE/Categories";
import Services from "../Components/LTE/Services";

const LTE = () => {
	const [LTES, setLTES] = useState([]);
	const [categories, setCategories] = useState([]);
	const [providers, setProviders] = useState([]);
	let [provider, setProvider] = useState();
	let [category, setCategory] = useState();
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			getLteProviders();
			// getLTES();
			return; // 👈️ return early if first render
		}
		getCategories();
	}, [provider]);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return; // 👈️ return early if first render
		}
		if (category) {
			getLTES();
		} else {
			console.log("Something is wrong");
		}
	}, [category]);

	function getLTES() {
		console.log(category);
		axios
			.get(
				"/ltes?filters[lte_service_provider][Name][$eq]=" +
					provider +
					"&filters[lte_category][Name][$eq]=" +
					category
			)
			.then((response) => {
				setLTES(response.data.data);
			})
			.catch((err) => {
				if (err) {
					console.log("No LTES");
				}
			});
	}
	function getCategories() {
		axios
			.get(
				"/lte-categories?filters[lte_service_providers][Name][$eq]=" + provider
			)
			.then((response) => {
				setCategories(response.data.data);
			})
			.catch((err) => {
				if (err) {
					console.log("No Categories");
				}
			});
	}
	function getLteProviders() {
		axios
			.get("/lte-service-providers")
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
		setProvider(selectedProvider);
	}
	function SelectCategory(selectedCategory) {
		setCategory(selectedCategory);
	}

	return (
		<div
			className="lte-section d-flex align-items-stretch flex-row row"
			style={{ minHeight: "100vh" }}
		>
			{/* navigation bar */}
			<SiteNav />
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
						<p className="display-1 text-center title">LTE</p>
						<p className="display-6 text-center title">
							Connect anywhere at any time
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
						<p className="display-1 text-center title">LTE</p>
						<p className="display-6 text-center title">
							Connect anywhere at any time
						</p>
					</div>
				</div>
			</div>

			<div className="col-12 col-md-6">
				<div className="row position-relative top-50 start-50 translate-middle">
					<div className="col-12 col-md-6 py-2">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">Month-to-Month (No Contract)</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6 py-2">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">One month role over</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6 py-2">
						<div className="bg-lte-text rounded-2 p-2 h-100">
							<p className="sub-title">No out-of-bundle data</p>
							<p>
								News write-ups offer a great way to let clients know about new
								products and services, events, awards, and more.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6 py-2">
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
			{/* providers */}
			<div className="col-12">
				<Providers providers={providers} SelectProvider={SelectProvider} />
			</div>
			{/* Categories selection */}
			<div className="col-12">
				<Categories categories={categories} SelectCategory={SelectCategory} />
			</div>
			{/* LTE services */}
			<div className="col-12">
				<Services ltes={LTES} />
			</div>
		</div>
	);
};

export default LTE;

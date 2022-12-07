import React, { useState, useEffect, useRef, useContext } from "react";
import SiteNav from "../Shared/navbar";
import laptop from "../images/kindpng_450792.png";
import blob from "../images/Oct1.svg";
import blob2 from "../images/blob(5).svg";
import axios from "axios";
import Providers from "../Components/LTE/Providers";
import Categories from "../Components/LTE/Categories";
import Services from "../Components/LTE/Services";
import { Context } from "../store";
import Loading from "../Shared/Loading";
import comsTower from "../images/coms-tower.svg";

const LTE = () => {
	const [LTES, setLTES] = useState([]);
	const [state, setState] = useContext(Context);
	const [categories, setCategories] = useState([]);
	const [providers, setProviders] = useState([]);
	let [provider, setProvider] = useState();
	let [category, setCategory] = useState();
	let [counter, setCounter] = useState(0);
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			getLteProviders();
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

	const getLTES = async () => {
		try {
			setState({ loading: true });
			await axios
				.get(
					"/ltes?filters[lte_service_provider][Name][$eq]=" +
						provider +
						"&filters[lte_category][Name][$eq]=" +
						category
				)
				.then((response) => {
					setLTES(response.data.data);
				});
			setState({ loading: false });
		} catch (error) {
			if (error) {
				console.log("No LTES");
			}
		}
	};
	const getCategories = async () => {
		try {
			setState({ loading: true });
			await axios
				.get(
					"/lte-categories?filters[lte_service_providers][Name][$eq]=" +
						provider
				)
				.then((response) => {
					setCategories(response.data.data);
					console.log(response.data);
				});
			setState({ loading: false });
		} catch (error) {
			if (error) {
				console.log("No Categories");
			}
		}
	};
	const getLteProviders = async () => {
		try {
			setState({ loading: true });
			await axios.get("/lte-service-providers").then((response) => {
				setProviders(response.data.data);
			});
			setState({ loading: false });
		} catch (error) {
			if (error) {
				console.log("No Providers");
			}
		}
	};
	function SelectProvider(selectedProvider) {
		setProvider(selectedProvider);
		setCounter(1);
	}
	function SelectCategory(selectedCategory) {
		setCategory(selectedCategory);
		setCounter(2);
	}
	function back() {
		setCounter(counter - 1);
	}

	return (
		<React.Fragment>
			{!state.loading ? (
				<div
					className="lte-section d-flex align-items-stretch flex-row row m-0 p-2"
					style={{ minHeight: "100vh" }}
				>
					{/* <img
						src={comsTower}
						style={{ zINdex: "1" }}
						className="w-100 position-absolute bottom-0 start-50 translate-middle-x m-0"
					/> */}
					<div className="col-12">
						{/* navigation bar */}
						<SiteNav />
					</div>
					<div className="col-12 position-relative">
						{/* Desktop */}
						<div className="d-none d-md-block">
							<div className="text-center h-100">
								<img src={blob} alt="..." className=" w-25" />
								<img
									src={laptop}
									alt="..."
									className="position-absolute top-50 start-50 translate-middle w-25"
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
						<div className="d-block d-md-none mt-5">
							<div className="text-center h-100">
								<img src={blob} alt="..." className="w-50" />
								<img
									src={laptop}
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
					<div className="col-12 d-flex flex-column m-0">
						<div className="h-100 flex-grow-1">
							{
								{
									0: (
										<Providers
											providers={providers}
											SelectProvider={SelectProvider}
										/>
									),
									1: (
										<Categories
											categories={categories}
											SelectCategory={SelectCategory}
											back={back}
										/>
									),
									2: <Services ltes={LTES} back={back} />,
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
										<p className="text-white">
											News write-ups offer a great way to let clients know about
											new products and services, events, awards, and more.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="p-2 h-100 d-flex align-items-center">
									<div>
										<p className="sub-title">One month role over</p>
										<p className="text-white">
											News write-ups offer a great way to let clients know about
											new products and services, events, awards, and more.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="p-2 h-100 d-flex align-items-center">
									<div>
										<p className="sub-title">No out-of-bundle data</p>
										<p className="text-white">
											News write-ups offer a great way to let clients know about
											new products and services, events, awards, and more.
										</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-3">
								<div className="p-2 h-100 d-flex align-items-center">
									<div>
										<p className="sub-title">
											LTE ready, just insert simcard into device and you are
											ready
										</p>
										<p className="text-white">
											News write-ups offer a great way to let clients know about
											new products and services, events, awards, and more.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</React.Fragment>
	);
};

export default LTE;

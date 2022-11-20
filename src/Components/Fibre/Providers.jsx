import React from "react";

const Providers = ({ providers, SelectProvider }) => {
	function OnchangeHandle(e) {
		SelectProvider(e.target.value);
	}
	return (
		<React.Fragment>
			<div className="d-flex flex-column h-100">
				{/* <p className="fs-1 text-center">Please select a Network Proider</p> */}
				<div class="row row-cols-1 row-cols-md-3 g-0 flex-grow-1">
					{providers.map((provider, index) => {
						return (
							<div class="col">
								<label className="w-100 h-100" key={index}>
									<input
										type="radio"
										name="category"
										class="card-input-element d-none h-100"
										value={provider.attributes.Name}
										id={index}
										onChange={OnchangeHandle}
									/>
									<div class="card text-center h-100">
										<div class="card-body d-flex align-items-center justify-content-center">
											<h5 class="card-title">{provider.attributes.Name}</h5>
										</div>
									</div>
								</label>
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Providers;

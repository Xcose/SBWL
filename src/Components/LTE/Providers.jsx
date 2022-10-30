import React from "react";

const Providers = ({ providers, SelectProvider }) => {
	function OnchangeHandle(e) {
		SelectProvider(e.target.value);
	}
	return (
		<React.Fragment>
			<p className="fs-1 text-center">Please select a Network Proider</p>
			<div class="row row-cols-1 row-cols-md-2 g-4">
				{providers.map((provider, index) => {
					return (
						<div class="col">
							<label className="w-100">
								<input
									type="radio"
									name="category"
									class="card-input-element d-none"
									value={provider.attributes.Name}
									id={index}
									onChange={OnchangeHandle}
								/>
								<div class="card  text-center">
									<div class="card-body">
										<h5 class="card-title">{provider.attributes.Name}</h5>
									</div>
								</div>
							</label>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default Providers;

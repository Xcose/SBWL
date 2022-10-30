import React, { Component } from "react";

const Services = (ltes) => {
	return ltes.ltes.length !== 0 ? (
		<React.Fragment>
			<p className="fs-1 text-center">Please select a service</p>
			<div class="row row-cols-1 row-cols-md-5 g-4">
				{ltes.ltes.map((lte, index) => {
					return (
						<div class="col">
							<label className="w-100">
								<input
									type="radio"
									name="organization"
									class="card-input-element d-none"
									id={index}
								/>
								<div class="card text-center">
									<div class="card-body">
										<h5 class="card-title">{lte.attributes.Name}</h5>
										<h6 class="card-subtitle mb-2 text-muted">
											{lte.attributes.Description}
										</h6>
										<p class="card-text">R {lte.attributes.Price}</p>
									</div>
								</div>
							</label>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	) : null;
};

export default Services;

import React, { Component } from "react";

const Services = ({ fibres, back }) => {
	return fibres.length !== 0 ? (
		<React.Fragment>
			<div className="d-flex flex-column h-100">
				{/* <p className="fs-1 text-center">Please select a service</p> */}
				<span className="fa-clickable" onClick={back}>
					<i
						className="bi-arrow-left-short mx-3 text-white m-2"
						style={{ fontSize: "2rem" }}
					></i>
				</span>
				<div class="row row-cols-1 row-cols-md-5 justify-content-center g-2 flex-grow-1">
					{fibres.map((fibre, index) => {
						return (
							<div class="col">
								<label className="w-100 h-100">
									<input
										type="radio"
										name="organization"
										class="card-input-element d-none h-100"
										id={index}
									/>
									<div class="card text-center h-100">
										<div class="card-body d-flex align-items-center justify-content-center">
											<div>
												<h5 class="card-title">{fibre.attributes.Name}</h5>
												<h6 class="card-subtitle mb-2 text-muted">
													{fibre.attributes.Description}
												</h6>
												<p class="card-text">R {fibre.attributes.Price}</p>
											</div>
										</div>
									</div>
								</label>
							</div>
						);
					})}
				</div>
			</div>
		</React.Fragment>
	) : null;
};

export default Services;

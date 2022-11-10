import React, { Component } from "react";

const Services = ({ ltes, back }) => {
	return ltes.length !== 0 ? (
		<React.Fragment>
			<div className="d-flex flex-column h-100">
				{/* <p className="fs-1 text-center">Please select a service</p> */}
				<span className="fa-clickable" onClick={back}>
					<i
						className="bi-arrow-left-short mx-3 text-white m-2"
						style={{ fontSize: "2rem" }}
					></i>
				</span>
				<div class="row row-cols-1 row-cols-md-3 g-0 flex-grow-1">
					{ltes.map((lte, index) => {
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
												<h5 class="card-title">{lte.attributes.Name}</h5>
												<h6 class="card-subtitle mb-2 text-muted">
													{lte.attributes.Description}
												</h6>
												<p class="card-text">R {lte.attributes.Price}</p>
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

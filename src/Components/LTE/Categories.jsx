import React from "react";

const Categories = ({ categories, SelectCategory }) => {
	function OnchangeHandle(e) {
		SelectCategory(e.target.value);
	}
	return categories.length !== 0 ? (
		<React.Fragment>
			<p className="fs-1 text-center">Please select the service type</p>
			<div class="row row-cols-1 row-cols-md-2 g-4">
				{categories.map((category, index) => {
					return (
						<div class="col">
							<label className="w-100">
								<input
									type="radio"
									name="category"
									class="card-input-element d-none"
									value={category.attributes.Name}
									id={index}
									onChange={OnchangeHandle}
								/>
								<div class="card text-center">
									<div class="card-body">
										<h5 class="card-title">{category.attributes.Name}</h5>
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

export default Categories;

import React from "react";

const Categories = ({ categories, SelectCategory, back }) => {
	function OnchangeHandle(e) {
		SelectCategory(e.target.value);
	}
	return categories.length !== 0 ? (
		<React.Fragment>
			<div className="d-flex flex-column h-100">
				<span className="fa-clickable" onClick={back}>
					<i
						className="bi-arrow-left-short mx-3 text-white m-2"
						style={{ fontSize: "2rem" }}
					></i>
				</span>
				<div class="row row-cols-1 row-cols-md-5 justify-content-center g-2 flex-grow-1">
					{categories.map((category, index) => {
						return (
							<div class="col">
								<label className="w-100 h-100">
									<input
										type="radio"
										name="category"
										class="card-input-element d-none h-100"
										value={category.attributes.Name}
										id={index}
										onChange={OnchangeHandle}
									/>
									<div class="card text-center h-100">
										<div class="card-body d-flex align-items-center justify-content-center">
											<h5 class="card-title">{category.attributes.Name}</h5>
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

export default Categories;

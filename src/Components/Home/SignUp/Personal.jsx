import React from "react";

const Personal = ({ next }) => {
	return (
		<React.Fragment>
			<form className="row g-3 needs-validation" novalidate>
				<div className="form-floating mb-3 col-md-6">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Name"
						required
					/>
					<label for="floatingInput">Name</label>
				</div>
				<div className="form-floating mb-3 col-md-6">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Surname"
						required
					/>
					<label for="floatingInput">Surname</label>
				</div>
				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="Email"
						required
					/>
					<label for="floatingInput">Email address</label>
				</div>
				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="Contact Number"
						required
					/>
					<label for="floatingInput">Contact Number</label>
				</div>
				<div className="col-md-3 offset-md-3">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							id="inlineCheckbox1"
							value="option1"
							checked
						/>
						<label class="form-check-label" for="inlineCheckbox1">
							RSA ID
						</label>
					</div>
				</div>
				<div className="col-md-3">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							id="inlineCheckbox2"
							value="option2"
						/>
						<label class="form-check-label" for="inlineCheckbox2">
							Passport
						</label>
					</div>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className="form-control"
						id="floatingInput"
						placeholder="ID Number"
						required
					/>
					<label for="floatingInput">ID Number</label>
				</div>
				<button type="button" onClick={next} className="btn btn-lg btn-primary">
					Next
				</button>
			</form>
		</React.Fragment>
	);
};

export default Personal;

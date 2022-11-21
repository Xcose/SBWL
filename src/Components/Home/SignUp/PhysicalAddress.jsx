import React from "react";

const PhysicalAddress = ({ back }) => {
	return (
		<form className="row g-3 needs-validation" novalidate>
			<div className="form-floating mb-3">
				<input
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="Email"
					required
				/>
				<label for="floatingInput">Street</label>
			</div>
			<div className="form-floating mb-3">
				<input
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="Email"
					required
				/>
				<label for="floatingInput">Suburb</label>
			</div>
			<div className="form-floating mb-3">
				<input
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="Email"
					required
				/>
				<label for="floatingInput">City</label>
			</div>
			<div className="form-floating mb-3">
				<input
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="Email"
					required
				/>
				<label for="floatingInput">Province</label>
			</div>
			<div className="form-floating mb-3">
				<input
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="Email"
					required
				/>
				<label for="floatingInput">Postal code</label>
			</div>
			<button type="button" onClick={back} className="btn btn-lg btn-primary">
				back
			</button>
		</form>
	);
};

export default PhysicalAddress;

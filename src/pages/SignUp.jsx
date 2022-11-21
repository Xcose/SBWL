import React from "react";
import SiteNav from "../Shared/navbar";

const SignUp = () => {
	const formSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<React.Fragment>
			<div
				className="fibre-section d-flex align-items-stretch flex-row row  m-0 g-0"
				style={{ minHeight: "100vh" }}
			>
				<div className="col-12">
					{/* navigation bar */}
					<SiteNav />
				</div>
				<div className="col-12 col-md-6 offset-md-3">
					<form
						class="row g-3 needs-validation"
						novalidate
						onSubmit={formSubmit}
					>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Name"
								required
							/>
							<label for="floatingInput">Name</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Surname"
								required
							/>
							<label for="floatingInput">Surname</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="Email"
								required
							/>
							<label for="floatingInput">Email address</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Contact Number"
								required
							/>
							<label for="floatingInput">Contact Number</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="ID Number"
								required
							/>
							<label for="floatingInput">ID Number</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Physical Address"
								required
							/>
							<label for="floatingInput">Physical Address</label>
						</div>
						<div class="form-check">
							<input
								class="form-check-input"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							/>
							<label class="form-check-label" for="flexCheckDefault">
								Delivery address the same as physical address?
							</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="text"
								class="form-control"
								id="floatingInput"
								placeholder="Delivery Address"
								required
							/>
							<label for="floatingInput">Delivery Address</label>
						</div>
						<div class="mb-3">
							<label for="floatingInput">Copy of ID</label>
							<input
								type="file"
								class="form-control"
								aria-label="file example"
								required
							/>
							<div class="invalid-feedback">
								Example invalid form file feedback
							</div>
						</div>
						<div class="mb-3">
							<label for="floatingInput">Proof of Address</label>
							<input
								type="file"
								class="form-control"
								aria-label="file example"
								required
							/>
							<div class="invalid-feedback">
								Example invalid form file feedback
							</div>
						</div>
						<button class="btn btn-primary" type="submit">
							Submit form
						</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignUp;

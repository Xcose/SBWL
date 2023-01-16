import axios from "axios";
import React, { useState } from "react";
import Personal from "./SignUp/Personal";
import PhysicalAddress from "./SignUp/PhysicalAddress";

const SignUp = () => {
	const [counter, setCounter] = useState(1);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const next = () => {
		setCounter(counter + 1);
	};
	const back = () => {
		setCounter(counter - 1);
	};
	const registerUser = () => {
		axios
			.post("/auth/local/register", {
				email: email,
				username: username,
				password: password,
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	return (
		<div
			class="modal fades"
			id="exampleModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog glass">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Sign up
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						{/* {
							{
								1: <Personal next={next} />,
								2: <PhysicalAddress back={back} />,
							}[counter]
						} */}
						<form className="row g-3 needs-validation" novalidate>
							<div className="form-floating mb-3 col-12">
								<input
									type="text"
									className="form-control"
									id="Username"
									placeholder="Username"
									onChange={(e) => setUsername(e.target.value)}
									value={username}
									required
								/>
								<label for="Username">Username</label>
							</div>
							<div className="form-floating mb-3 col-12">
								<input
									type="email"
									className="form-control"
									id="Email"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									required
								/>
								<label for="Email">Email</label>
							</div>
							<div className="form-floating mb-3 col-12">
								<input
									type="password"
									className="form-control"
									id="Password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
									required
								/>
								<label for="Password">Password</label>
							</div>
							<div className="form-floating mb-3 col-12">
								<button
									type="button"
									className="btn btn-primary"
									onClick={registerUser}
								>
									Register
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

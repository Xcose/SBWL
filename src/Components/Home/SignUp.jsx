import React, { useState } from "react";
import Personal from "./SignUp/Personal";
import PhysicalAddress from "./SignUp/PhysicalAddress";

const SignUp = () => {
	const [counter, setCounter] = useState(1);

	const next = () => {
		setCounter(counter + 1);
	};
	const back = () => {
		setCounter(counter - 1);
	};
	return (
		<div
			class="modal fade"
			id="exampleModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							Modal title
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						{
							{
								1: <Personal next={next} />,
								2: <PhysicalAddress back={back} />,
							}[counter]
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;

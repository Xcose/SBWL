import React from "react";

function Contact() {
	return (
		<div className="text-white p-5" id="contact" style={{ minHeight: "100vh" }}>
			<div className="row text-white p-5">
				<div className="col-12">
					<p className="display-1 title text-center">GET IN TOUCH</p>
				</div>
				<div className="col-12 col-md-4 p-5">
					<p className="sub-title fs-5">Email Address</p>
					<p>info@sbwl.co..za</p>
				</div>
				<div className="col-12 col-md-4 p-5">Social Icons</div>
				<div className="col-12 col-md-4 p-5">
					<div>
						<p className="sub-title fs-5">Phone Number</p>
						<p>0845351089</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;

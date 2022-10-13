import React from "react";

function Footer() {
	return (
		<footer className="page-footer w-100 font-small bg-dark text-main">
			<div className="row pb-4 m-0">
				<div className="col-12 col-lg-4">
					<div className="mt-4 text-center">
						<a href="mailto:info@sbwldata.co.za" className="text-main mx-5"></a>

						<abbr title="076 661 3279" className="mx-5"></abbr>

						<a
							href="https://www.facebook.com/Sbwl-Data-100692328403977/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-main mx-5"
						></a>
					</div>
				</div>
				<div className="col-12 col-lg-4 m-0">
					<div className="mt-4 text-center">
						<a
							className="font-weight-bold text-main mx-2 border-right pr-3"
							href="#/About"
						>
							About
						</a>
						<a className="font-weight-bold text-main mx-2" href="#/Terms">
							T's&amp;C's
						</a>
					</div>
				</div>
				<div className="col-12 col-lg-4 text-center">
					<div className="font-weight-bold mt-4 text-center">
						SBWL Data © 2020 Copyright
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

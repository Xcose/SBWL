import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
	return (
		<div className="vh-100position-relative">
			<div class="position-absolute top-50 start-50 translate-middle">
				<ReactLoading type="bubbles" color="#9244f3" />
			</div>
		</div>
	);
};

export default Loading;

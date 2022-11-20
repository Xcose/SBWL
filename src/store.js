import React, { useState } from "react";

const initialState = {
	loading: false,
};

export const Context = React.createContext();

const store = ({ children }) => {
	const [state, setState] = useState(initialState);

	return (
		<Context.Provider value={[state, setState]}>{children}</Context.Provider>
	);
};

export default store;

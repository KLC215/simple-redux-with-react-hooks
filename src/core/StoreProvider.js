import React, { createContext, useReducer, useState, useEffect } from 'react';

export const StoreContext = createContext();

export default ({ children, reducer }) => {
	const [store, dispatch] = useReducer(reducer);
	const [state, setState] = useState({ isLoaded: false });

	useEffect(() => {
		dispatch({ type: 'INITIAL_STORE' });
		setState({ isLoaded: true });
	}, []);

	return (
		<StoreContext.Provider value={{ dispatch, store }}>
			{state.isLoaded ? children : false}
		</StoreContext.Provider>
	);
};

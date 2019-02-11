export default reducer => (state = {}, action) => {
	const nextReducers = {};

	Object.keys(reducer).forEach(key => {
		const invoke = reducer[key](state[key], action);
		nextReducers[key] = invoke;
	});

	return nextReducers;
};

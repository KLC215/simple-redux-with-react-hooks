export const UPDATE_NAME = 'UPDATE_NAME';

const initialState = {
	name: ''
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NAME:
			return { ...state, name: action.payload };
		default:
			return state;
	}
};

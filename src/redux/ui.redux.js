export const TOGGLE_LOADING_STATUS = 'TOGGLE_LOADING_STATUS';

const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_STATUS:
      return { ...state, isLoading: !state.isLoading}
    default:
      return state;
  }
} 
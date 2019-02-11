import form, { UPDATE_NAME } from './form.redux';
import ui, { TOGGLE_LOADING_STATUS } from './ui.redux';

export const reducers = {
	form,
	ui
};

export const actions = {
	UPDATE_NAME,
	TOGGLE_LOADING_STATUS
};

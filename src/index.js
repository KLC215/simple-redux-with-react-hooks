import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { StoreProvider, combineReducers } from './core';
import { reducers } from './redux';

const { form, ui } = reducers;

const reducer = combineReducers({
	form,
	ui
});

ReactDOM.render(
	<StoreProvider reducer={reducer}>
		<App />
	</StoreProvider>,
	document.getElementById('root')
);

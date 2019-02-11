import React, { Fragment } from 'react';
import { connect } from '../../core';
import { actions } from '../../redux';

const { UPDATE_NAME, TOGGLE_LOADING_STATUS } = actions;

const App = props => {
	const { isLoading, name, updateName, toggleLoading } = props;

	return (
		<Fragment>
			<pre style={{ fontSize: 18 }}>{JSON.stringify(props, null, 2)}</pre>
			<h1>{isLoading ? 'Loading...' : `Hello ${name}`}</h1>
			<input value={name} onChange={e => updateName(e.target.value)} />
			<button onClick={toggleLoading} disabled={isLoading}>
				Toggle Loading (async)
			</button>
		</Fragment>
	);
};

const mapStateToProps = ({ form, ui }) => ({
	isLoading: ui.isLoading,
	name: form.name
});

const mapDispatchToProps = dispatch => ({
	updateName: name => dispatch({ type: UPDATE_NAME, payload: name }),
	toggleLoading: () => {
		(async () => {
			dispatch({ type: TOGGLE_LOADING_STATUS });
			await new Promise(resolve => setTimeout(() => resolve(true), 1000));
			dispatch({ type: TOGGLE_LOADING_STATUS });
		})();
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

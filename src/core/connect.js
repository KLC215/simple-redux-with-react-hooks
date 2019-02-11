import React, { useContext } from 'react';
import { StoreContext } from './StoreProvider';

export default (mapStateToProps, mapDispatchToProps) => {
	return WrappedComponent => {
		return () => {
			const { dispatch, store } = useContext(StoreContext);
			return (
				<WrappedComponent
					{...mapStateToProps(store)}
					{...mapDispatchToProps(dispatch)}
				/>
			);
		};
	};
};

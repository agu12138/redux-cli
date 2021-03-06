// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/79302123ace14abf0f1b225987133f0759e49bd7/redux-promise/index.d.ts
declare module 'redux-promise' {
// Type definitions for redux-promise v0.5.3
// Project: https://github.com/acdlite/redux-promise
// Definitions by: Rogelio Morrell Caballero <https://github.com/molekilla>, Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from 'redux';

const promise: ReduxPromise.Promise;
export = promise;

namespace ReduxPromise {
	export interface Promise extends Redux.Middleware {}
}

module 'redux' {
	type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;

	interface Dispatch<S> {
		<R>(asyncAction: PromiseAction<S>): R;
	}
}
}

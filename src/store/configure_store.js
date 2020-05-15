import { createBrowserHistory } from 'history'; // было в бетмене. Перехватывает адреса в браузере.
import {
	createStore, // функция, генерирующая наш store
	applyMiddleware, // функция-мама, отправившая ребёнка за молоком
	compose
} from "redux";

import thunk from 'redux-thunk';

import createRootReducer from './reducer';

export const history = createBrowserHistory(); // тоже было в бетмене

export default function configureStore(preloadedState) {

	const store = createStore(
		createRootReducer(history),
		preloadedState,
		compose(
			applyMiddleware(thunk))
			// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // это для расширения Ридакс в Хроме
	);

	return store;
}
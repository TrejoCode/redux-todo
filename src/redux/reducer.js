/**
 * @desscription Pure components state managment (Reducers)
*/

import { ADD_TODO, DELETE_TODO } from "redux/actionTypes";

const initialState = {
	todos: []
};

const rootReducer = (state = initialState, { payload, type }) => {
	switch (type) {

		case ADD_TODO:

			const auxTodos = [...state.todos, { item: payload, marked: false }];

			return {
				...state,
				todos: auxTodos
			};
			
			case DELETE_TODO:

				console.log(payload);
				let updatedTodos = [...state.todos];
				updatedTodos[payload] = { ...updatedTodos[payload], marked: !updatedTodos[payload].marked };

				return {
					...state,
					todos: updatedTodos
				};

		default:
			return state;
	}
};

export default rootReducer;

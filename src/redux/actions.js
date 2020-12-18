/**
 * @version 1.0.0
 * @desscription Dispatch all actions using Thunks
*/

import { ADD_TODO, DELETE_TODO } from "redux/actionTypes";

/**
 * @description Thunk for add a TODO Item
 * @param { Function } payload: Data payload to set into state
 */
export const addTodoAction = (payload) => async (dispatch) => {

  	dispatch({
		type: ADD_TODO,
		payload
	});

};


/**
 * @description Thunk for mark a TODO Item
 * @param { Function } payload: Data payload to set into state
 */
export const deleteTodoAction = (payload) => async (dispatch) => {

	dispatch({
		type: DELETE_TODO,
	  	payload
  });

};

import React from 'react';
import { useDispatch }      from 'react-redux';
import { deleteTodoAction } from 'redux/actions';

const TodoList = ({ todoItems }) => {

    const dispatch = useDispatch();

    const handleDelete = index => {

        dispatch(deleteTodoAction(index));

    };

    return(
        <ol className="__item">
            { todoItems?.map((todo, key) => (
                <li key = { key } className = { `--font-2x ${todo.marked ? '--text-through' : ''}` } onClick = { _ => handleDelete(key) }>
                    { todo.item }
                </li>
            ))}
        </ol>
    );

};

export default TodoList;
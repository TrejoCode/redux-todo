import React, { useState }  from 'react';
import { useDispatch }      from 'react-redux';
import { addTodoAction }    from 'redux/actions';

const Input = _ => {

    const dispatch = useDispatch();
    const [item, setItem] = useState('');

    return(
        <div className="input__group">
            <div className="input__container">
                <label htmlFor="item" className="--color-white">
                    Write a task:
                </label>
                <input type = "text" name = "item" id = "item" maxLength = "64" minLength = "4" required 
                    value = { item } onChange = { event => setItem(event.currentTarget.value) } 
                />
            </div>
            <button type = "button" onClick = { _ => dispatch(addTodoAction(item)) }>
                Add item
            </button>
        </div>
    );

};

export default Input;
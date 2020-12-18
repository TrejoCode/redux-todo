import React from 'react';
import { useSelector } from "react-redux";
import Input 	from "components/Input";
import TodoList from "components/TodoList";

const PageHome = _ => {

    const todos = useSelector(state => state.todos);

    return(

        <main>
			<form>
                <div className="left">
                    <h1 className="--font-3x">Simple TODO List</h1>
			        <h2 className="--font-2x">Start editing to see some magic!</h2>
                    <Input />
                </div>
                <div className="right">
                    { todos.length ?
                        <h2 className="--font-2x">Click on an item to mark it</h2> :
                        <h2 className="--font-2x">It's empty, add some item</h2>
                    }
                    <TodoList todoItems = { todos } />
                </div>
			</form>
        </main>

    );

};

export default PageHome;
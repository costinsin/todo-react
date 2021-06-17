import './Todo.css';
import TodoEntry from './TodoEntry.js';
import React, {useEffect, useState} from "react";

function Todo() {
    const [list, setList] = useState([]);

    let updateList = (event) => {
        event.preventDefault();
        setList(list.concat([event.target[0].value]));
        document.getElementById("todo-form").reset();
    }

    let handleRemoval = (i) => {
        return () => {
            let aux = list.slice();
            aux.splice(i, 1);
            setList(aux);
        }
    }

    let clearList = () => {
        setList([]);
    }

    useEffect(() => {console.log("Reloaded component!")}, [list])

    return (
        <div>
            <h2>TODO App</h2>
            <form onSubmit={updateList} autoComplete={"off"} id={"todo-form"}>
                <input type={"text"} className={"todo-task"} />
            </form>
            <div id={"todo-list"}>
                {list.map((item, i) => <TodoEntry i={i} item={item} onRemoval={handleRemoval(i)}/>)}
            </div>
            <button onClick={clearList}>Clear list</button>
        </div>
    );
}

export default Todo;
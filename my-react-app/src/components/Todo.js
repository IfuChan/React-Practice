import { useState } from "react";

// function Todo() {
//     const [todo, setTodo] = useState('');
//     const [warning, setWarning] = useState(null);
//     const handleInput = (e) => {
//         const inputValue = e.target.value;
//         const warning = inputValue.includes('.js')
//             ? 'wILL not work son you need to learn Java script for it!!' : null;
//         setTodo(inputValue);
//         setWarning(warning);
//     };
//     return (
//         <div>
//             <p>{todo}</p>
//             <p>
//                 <textarea name="todo" value={todo} onChange={handleInput} />
//             </p>
//             <hr />
//             <h2>{warning || 'Damn that sucks!'}</h2>
//         </div>
//     );
// }

//if state was an object instead of one value
function Todo() {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });

    const { title, description } = todo;
    return (
        <div>
            <p>{title}</p>
            <p>
                <input type="text" value={title} onChange={(e) => {
                    setTodo({
                        ...todo,//this line is added, object spreading, to fix objects in states (in useState)
                        title: e.target.value,
                    })
                }} />
            </p>
            <p>
                <textarea name="todo" value={description} onChange={(e) => {
                    setTodo({
                        ...todo,
                        description: e.target.value,
                    })
                }} />
            </p>

        </div>
    );
}

export default Todo;
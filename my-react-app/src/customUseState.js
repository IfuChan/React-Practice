// import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';

let states = []; //[0: [value, setterFunction], 1: [value, setterFunction]]
let stateIndex = -1;
function useState(defaultValue) {
  const index = ++stateIndex;
  if (states[index]) return states[index];
  const setValue = (newValue) => {
    states[index][0] = newValue;
    renderWithIfad(); //for rerender after setting the value;
  }

  const returnArray = [defaultValue, setValue];
  states[index] = returnArray;
  return returnArray;
}

function App() {
  const [todo, setTodo] = useState('');
  const [warning, setWarning] = useState(null);
  const handleInput = (e) => {
    const inputValue = e.target.value;
    const warning = inputValue.includes('.js')
      ? 'wILL not work son you need to learn Java script for it!!' : null;
    setTodo(inputValue);
    setWarning(warning);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea name="todo" value={todo} onChange={handleInput} />
      </p>
      <hr />
      <h2>{warning || 'Damn that sucks!'}</h2>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
function renderWithIfad() {
  stateIndex = -1;

  root.render(
    <App />
  );
}

renderWithIfad();



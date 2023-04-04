import { useReducer } from 'react';

const initialState = 10;
const initialState2 = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.value };
        case 'decrement':
            return { ...state, counter: state.counter - action.value };
        default:
            return state;
    }
};

export default function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);

    return (
        <div>
            <div>
                <div>Count - {count}</div>
                <button
                    type="button"
                    onClick={() =>
                        dispatch('increment')
                    }
                >
                    Increment by 1
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch('decrement')
                    }
                >
                    Decrement by 1
                </button>
            </div>
            <div>
                <div>Count2 - {count2}</div>
                <button
                    type="button"
                    onClick={() =>
                        dispatch2('increment')
                    }
                >
                    Increment by 1
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch2('decrement')
                    }
                >
                    Decrement by 1
                </button>
            </div>
        </div>
    );
}
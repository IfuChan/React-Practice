import { React, useState } from "react";
// import MyComponentClass from "./components/MyComponentClass";
import MyComponent from "./components/MyComponent";

export default function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="App">
            <p>We shall learn useEffect today!</p>
            <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
                    {show ? 'Hide Post' : 'Show post'}
                </button>
            </p>
        </div>

    );
}

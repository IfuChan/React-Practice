import { React, useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import Title from "./components/Title";
import ShowCount from "./components/ShowComponent";

export default function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1;
        return count1 % 2 === 0;
    }, [count1]); //only call this function newly when this dependency changes

    return (
        <div className="App">
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment By One</Button>
            <hr />
            <ShowCount count={count2} title="Coounter 2" />
            <Button handleClick={incrementByFive}>Increment by FIVE</Button>
        </div>

    );
}

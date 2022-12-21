import React, {useState} from 'react';
import {clear} from "@testing-library/user-event/dist/clear";

const Counter = ({counter, setCounter}) => {

    const Plus = () => {
        setCounter(counter + 1)
    }

    const Minus = () => {
        setCounter(counter - 1)
    }


    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={Plus}>Plus</button>
            <button onClick={Minus}>Minus</button>
        </div>
    );
};

export default Counter;
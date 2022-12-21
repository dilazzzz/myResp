import React, {useEffect, useState, useMemo} from 'react';
function StopOp(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
}
const UseMemo = () => {

    const [counter, setCounter] = useState(0)
    const [color, setColor] = useState(false)

    const computed = useMemo(() => {
        return StopOp(counter)
    },[counter])

    const style = {
        color: color ? 'green' : 'red'
    }

    return (
        <div>
            <h1 style={style}>Counter: {computed}</h1>
            <button onClick={() => setCounter(prev => prev + 1)}>Plus</button>
            <button onClick={() => setCounter(prev => prev - 1)}>Minus</button>
            <button onClick={() => setColor(prev => !prev)}>Color</button>
        </div>
    );
};

export default UseMemo;
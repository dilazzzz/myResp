import React,{useState, useEffect,useRef} from 'react';
const UseRef = () => {
    const [value, setValue] = useState('')
    const renderCount = useRef(1)
    const inputRef = useRef(null)

    useEffect(() => {
        renderCount.current++
        console.log(inputRef.current.value)
    })
    const Focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Render count: {renderCount.current}</h1>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)}value={value}/>
            <button onClick={Focus}>Focus</button>
        </div>
    );
};

export default UseRef;
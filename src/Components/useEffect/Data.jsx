import React, {useEffect, useState} from 'react';

const Data = ({counter}) => {

    const [data, setData] = useState('')
    let startFetch

    useEffect(() => {
        setData('')
        clearTimeout(startFetch)
        startFetch = setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
                .then(response => response.json())
                .then(json => setData(json))
        },2000)
        }, [counter])



    return (
        <div>
            <h1>Запрос:{counter}</h1>
            {data ? <div>{JSON.stringify(data, null, 2)}</div> : null}
        </div>
        )
};

export default Data;


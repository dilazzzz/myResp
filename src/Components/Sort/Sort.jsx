import React, {useEffect, useMemo, useState} from 'react';
import sortStyles from './sort.module.css'

const Sort = () => {

    const [type, setType] = useState('choose sort')
    const users =
        [
            {id: 1, label: 'Артем Кожанов', age: '27', grow: '180'},
            {id: 2, label: 'Егор Тилин', age: '25', grow: '166'},
            {id: 3, label: 'Александр Полубнев', age: '26', grow: '188'}
        ]

    const sortUsers = users.sort((a, b) => {
        if (type === 'Alphabet A-Z') {
            return a.label < b.label ? -1 : 1
        }
        if (type === 'Alphabet Z-A') {
            return b.label < a.label ? -1 : 1
        }
        if (type === 'Age max-min') {
            return  b.age - a.age
        }
        if (type === 'Age min-max') {
            return  a.age - b.age
        }
        if (type === 'Growth max-min') {
            return  b.grow - a.grow
        }
        if (type === 'Growth min-max') {
            return  a.grow - b.grow
        }
    })

    // const computed = useMemo(() => {
    //     return StopOp(counter)
    // },[counter])

    return (
        <div>
            <h1>filter by:{type}</h1>
            <select onChange={event => setType(event.target.value)} className={sortStyles.select} name="" id="">
                <option>Choose sort</option>
                <option>Alphabet A-Z</option>
                <option>Alphabet Z-A</option>
                <option>Age min-max</option>
                <option>Age max-min</option>
                <option>Growth min-max</option>
                <option>Growth max-min</option>
            </select>
            {sortUsers.map( user => {
                return (
                    <div key={user.id} className={sortStyles.userList}>
                        <div className={sortStyles.item}>Name: {user.label}</div>
                        <div className={sortStyles.item}>Age: {user.age}</div>
                        <div className={sortStyles.item}>Grow: {user.grow}</div>
                    </div>
                )
            })}
        </div>
    );
};

export default Sort;

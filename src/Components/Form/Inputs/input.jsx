import React from 'react';
import inputStyles from './input.module.css'

const Input = ({...props}) => {
    return (
        <input {...props} className={inputStyles.input}/>
    );
};

export default Input;
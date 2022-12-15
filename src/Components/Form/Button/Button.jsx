import React from "react";
import btnStyle from "./button.module.css"


const Button = ({children,...props}) => {

    return (
        <button {...props} className={btnStyle.btn}>
            {children}
        </button>
    );
};

export default Button;
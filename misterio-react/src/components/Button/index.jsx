import React from "react";
import styles from "./styles.module.css"

export const Button = ({ onClick, title, ...rest }) => {
    return <button style={styles.button} onClick={onClick} {...rest}>
        {title}
    </button>
};
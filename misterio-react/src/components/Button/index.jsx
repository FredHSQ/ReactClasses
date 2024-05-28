import React from "react";
import styles from "./styles.module.css"

export const Button = ({ onClick, title }) => {
    return <button style={styles.button} onClick={onClick}>
        { title }
    </button>
};
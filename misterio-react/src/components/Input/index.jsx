import React from 'react';
import styles from './styles.module.css';

export const Input = ({ inputLabel, ...rest }) => {
    return <div className={styles.labeledInput}>
        <p className={styles.label}>
            {inputLabel}
        </p>
        <input {...rest} />
    </div>
};
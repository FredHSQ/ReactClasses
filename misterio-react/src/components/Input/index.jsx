import React from 'react';
import styles from './styles.module.css';

export const Input = ({ inputLabel }) => {
    return <div className={styles.labeledInput}>
        <p className={styles.label}>
            { inputLabel }
        </p>
        <input />
    </div>
};
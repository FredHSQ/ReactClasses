import React from 'react';
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import { EnemyList } from '../../components/EnemyList';

export const EnemyShop = () => {

    return (
        <div className={styles.container}>
            <Link to={'/favEnemy'}>Favoritos</Link>
            <EnemyList />
        </div>
    )
};
import React, { useContext, useEffect, useState } from "react";
import styles from './styles.module.css'
import { getEnemyList } from '../../services/apiDnd';
import { Enemy } from "../Enemy";
import { FavEnemyContext } from "../../context/FavEnemyContext";

export const EnemyList = () => {
    const [enemyList, setEnemyList] = useState([]);
    const [loadingList, setLoadingList] = useState(true);
    const { favEnemyList } = useContext(FavEnemyContext);

    async function populateEnemyList() {
        try {
            const newEnemyList = await getEnemyList();
            setEnemyList(newEnemyList.data.results);
            setLoadingList(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        populateEnemyList()
    }, [favEnemyList]);

    if (loadingList) {
        return <div>
            Carregando...
        </div>
    }

    return <div className={styles.enemyList}>
        {enemyList.map((enemy, index) => {
            return <Enemy
                key={index}
                enemy={enemy}
            />
        })}
    </div>
};
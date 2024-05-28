import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import EmptyStar from '../../assets/emptyStar.png';
import FullStar from '../../assets/fullStar.png';
import { FavEnemyContext } from "../../context/FavEnemyContext";

export const Enemy = ({ enemy }) => {
    const [isFav, setIsFav] = useState(false);
    const { addFavEnemy, removeFavEnemy, favEnemyList } = useContext(FavEnemyContext);

    function setIsEnemyFav () {
        if(!isFav) {
            addFavEnemy(enemy);
        } else {
            removeFavEnemy(enemy.index);
        }
        setIsFav(!isFav)
    }

    useEffect(()=>{
        const isEnemyfav = favEnemyList.find(favEnemy=> favEnemy.index === enemy.index);
        if(isEnemyfav) {
            setIsFav(true);
        }
    },[favEnemyList]);

    return <div className={styles.enemy}>
        {enemy.name}
        <img onClick={setIsEnemyFav} src={isFav ? FullStar : EmptyStar} />
    </div>
}
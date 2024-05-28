import React, { useContext } from "react";
import { FavEnemyContext } from "../../context/FavEnemyContext";
import { Enemy } from "../../components/Enemy";

export const FavoriteEnemies = () => {
    const { favEnemyList } = useContext(FavEnemyContext)
    return favEnemyList.map(enemy=><Enemy enemy={enemy}/>)
}
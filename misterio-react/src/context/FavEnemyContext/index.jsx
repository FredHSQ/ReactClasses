import React, { createContext, useState, useEffect } from 'react';

export const FavEnemyContext = createContext();

export const FavEnemyProvider = ({ children }) => {
    const [favEnemyList, setFavEnemyList] = useState([]);

    useEffect(() => {
        setFavEnemyList(()=>getData())
    }, []);

    const storeData = (value) => {
        const jsonValue = JSON.stringify(value);
        localStorage.setItem('fav-enemy-list', jsonValue);
    };

    const getData = () => {
        const jsonValue = localStorage.getItem('fav-enemy-list');
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    };

    function addFavEnemy(favEnemy) {
        setFavEnemyList([...favEnemyList, favEnemy]);
        storeData([...favEnemyList, favEnemy]);
    }

    function removeFavEnemy(index) {
        let newFavEnemyList = favEnemyList.filter(enemy => {
            return enemy.index !== index
        })

        setFavEnemyList(newFavEnemyList);
        storeData(newFavEnemyList);
    }

    return (
        <FavEnemyContext.Provider
            value={{
                favEnemyList,
                addFavEnemy,
                removeFavEnemy
            }}
        >
            {children}
        </FavEnemyContext.Provider>
    )
}
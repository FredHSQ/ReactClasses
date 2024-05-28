import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from '/src/pages/ErrorPage';
import { Login } from '/src/pages/Login';
import { EnemyShop } from "/src/pages/EnemyShop";
import { FavoriteEnemies } from "/src/pages/FavoriteEnemies";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />
    },
    {
        path: "/enemyShop",
        element: <EnemyShop />,
        errorElement: <ErrorPage />
    },
    {
        path: "/favEnemy",
        element: <FavoriteEnemies />,
        errorElement: <ErrorPage />
    }

]);
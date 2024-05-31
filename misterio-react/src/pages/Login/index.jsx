import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.css';

export const Login = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function navigateToShop() {
    navigate('../enemyShop');
  }

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    console.log(email);
    console.log(password);
    console.log(count);
  }, [count]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Input
          onChange={e => setEmail(e.target.value)}
          inputLabel={'Email'}
          placeholder={'Coloque seu email'}
        />
        <Input
          onChange={e => setPassword(e.target.value)}
          inputLabel={'Senha'}
          placeholder={'*******'}
          type='password'
        />
        <div className={styles.buttonsContainers}>
          <Button
            title={'Login'}
            onClick={navigateToShop}
          />
          <Button
            title={'Increase Count'}
            onClick={increaseCount}
          />
        </div>
        <Link to={'/enemyShop'}>fred</Link>
        <h1>{count}</h1>
      </div>
    </div>
  )
};
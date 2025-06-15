'use client';
import { useState } from 'react';
import { RandomUser } from '../../interfaces/user';
import styles from './RandomUser.module.scss';

export default function RandomUserComponent() {
  const [user, setUser] = useState<RandomUser | null>(null);

  const fetchUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    setUser(data.results[0]);
  };

  return (
    <div className={styles.card}>
      {user ? (
        <>
          <img className={styles.image} src={user.picture.large} alt="User avatar" />
          <h2>{user.name.first} {user.name.last}</h2>
          <p>{user.email}</p>
          <p>{user.location.country}</p>
        </>
      ) : (
        <p>Click the button to fetch a random user</p>
      )}

      <button className={styles.button} onClick={fetchUser}>
        Click
      </button>
    </div>
  );
}

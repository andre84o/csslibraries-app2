'use client';
import { useState } from 'react';
import { RandomUser } from '../../interfaces/user';
import styles from './RandomUser.module.scss';
import { ImMobile } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function RandomUserComponent() {
  const [user, setUser] = useState<RandomUser | null>(null);
  const [savedUsers, setSavedUsers] = useState<RandomUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<RandomUser | null>(null);

  const fetchUser = async () => {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    setUser(data.results[0]);
  };

  const toggleSaveUser = () => {
    if (!user) return;

    setSavedUsers(prev => {
      const alreadySaved = prev.some(u => u.login.uuid === user.login.uuid);

      if (alreadySaved) {
        // Remove user if already saved
        return prev.filter(u => u.login.uuid !== user.login.uuid);
      } else {
        if (prev.length >= 5) {
          alert("You can only save up to 5 profiles.");
          return prev;
        }

        return [...prev, user];
      }
    });
  };

  const removeSingleUser = (uuid: string) => {
    setSavedUsers(prev => prev.filter(u => u.login.uuid !== uuid));
  };

  const isSaved = user && savedUsers.some(u => u.login.uuid === user.login.uuid);

  return (
    <div className={styles.profileWrapper}>
      {/* Profile card */}
      <div className={styles.card}>
        {user ? (
          <>
            <button
              onClick={toggleSaveUser}
              className={styles.starButton}
              title={isSaved ? "Remove from saved" : "Save profile"}
            >
              <FaStar color={isSaved ? '#FFD700' : '#ccc'} size={20} />
            </button>

            <img className={styles.image} src={user.picture.large} alt="User avatar" />
            <h2>{user.name.first} {user.name.last}</h2>
            <p><ImMobile /> {user.cell}</p>
            <p><MdOutlineMailOutline /> {user.email}</p>
            <p><FaLocationDot /> {user.location.country}</p>
          </>
        ) : (
          <p>Click the button to find your candidate</p>
        )}

        <button className={styles.button} onClick={fetchUser}>
          Next
        </button>
      </div>

      {/* Saved profiles */}
      <div className={styles.savedColumn}>
        {savedUsers.length === 0 ? (
          <p className={styles.SaveProfile}></p>
        ) : (
          savedUsers.map((u) => (
            <div
              key={u.login.uuid}
              className={styles.savedCard}
              onClick={() => setSelectedUser(u)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeSingleUser(u.login.uuid);
                }}
                className={styles.removeButton}
                title="Remove"
              >
                <IoClose />
              </button>
              <img src={u.picture.thumbnail} alt={u.name.first} />
              <div className={styles.savedText}>
                <p>{u.name.first} {u.name.last}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Popup for selected profile */}
      {selectedUser && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <button className={styles.closeButton} onClick={() => setSelectedUser(null)}>
              <IoClose size={24} />
            </button>
            <img src={selectedUser.picture.large} className={styles.popupImage} />
            <h2>{selectedUser.name.first} {selectedUser.name.last}</h2>
            <p><ImMobile /> {selectedUser.cell}</p>
            <p><MdOutlineMailOutline /> {selectedUser.email}</p>
            <p><FaLocationDot /> {selectedUser.location.country}</p>
          </div>
        </div>
      )}
    </div>
  );
}

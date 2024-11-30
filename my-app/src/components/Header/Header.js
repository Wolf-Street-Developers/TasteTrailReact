import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getUserRoles } from "../../api/userService";

const Header = () => {
  const [role, setRole] = useState()

  useEffect(() => {
    getUserRoles()
    .then((u) => setRole(u.data.roles[0]))
    .catch(()=>setRole("No role"))},[]
  )

  return (
    <div className={styles.main_container}>
      <div className={styles.header_container}>
        <div className={styles.header_container}>
            <Link className={styles.header_item}  to="/">Home</Link>
            <Link className={styles.header_item} to="venues">Venues</Link>
            {(role === "User" || role === "Admin" || role === "Owner")  
              && <Link className={styles.header_item} to="user">User</Link>}
            {role === "Owner" && <Link className={styles.header_item} to="myVenue">My Venue</Link>}
        </div>

        <div className={styles.header_container}>
          {role === "Admin" && <Link className={styles.header_item} to="admin">Admin panel</Link>}
          {role === "No role" && <Link className={styles.header_item} to="logIn">Log in</Link>}
          {role === "No role" && <Link className={styles.header_item} to="signUp">Sign up</Link>}
          {role !== "No role" && <Link className={styles.header_item} to="logout">Logout</Link>}
        </div>
      </div>
    </div>
  );
};
  
  
export default Header
  
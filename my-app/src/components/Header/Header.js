import styles from './Header.module.css';

import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../api/authService';
import { useRole } from '../../RoleContext';

const Header = () => {
  const navigate = useNavigate()
  const { updateRole } = useRole()
  const { role } = useRole();



  return (
    <div className={styles.main_container}>
      <div className={styles.header_container}>
        <div className={styles.header_container}>
            <Link className={styles.header_item}  to="/">Home</Link>
            <Link className={styles.header_item} to="venues">Venues</Link>
            {(role === "User" || role === "Admin" || role === "Owner")  && <Link className={styles.header_item} to="user">User</Link>}
            {role === "Owner" && <Link className={styles.header_item} to="myVenue">My Venue</Link>}
        </div>

        <div className={styles.header_container}>
          {role === "Admin" && <Link className={styles.header_item} to="admin">Admin panel</Link>}
          {role === "No role" && <Link className={styles.header_item} to="logIn">Log in</Link>}
          {role === "No role" && <Link className={styles.header_item} to="signUp">Sign up</Link>}
          {role !== "No role" && <span className={styles.header_item} onClick={()=>{logout().then(()=>{updateRole("No role"); navigate("/")})}}>Logout</span>}
        </div>
      </div>
    </div>
  );
};
  
  
export default Header
  
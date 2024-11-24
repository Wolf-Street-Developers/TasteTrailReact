import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from "react";
import { getUserRoles } from "../../api/userService";

const Header = () => {
    const [role, setRole] = useState()
    useEffect(()=>{getUserRoles().then((u)=>{setRole(u.data.roles[0]);}).catch(()=>setRole("No role"))},[])
    return (
      <div className='header_container'>
        <nav className='header_buttons_container'>
            <Link to="/">Home</Link>
            <Link to="logIn">Log in</Link>
            <Link to="signUp">Sign up</Link>
            <Link to="venues">Menu</Link>
            <Link to="user">User</Link>
            {role === "Owner" && <Link to="myVenue">My Venue</Link>}
            {role === "Admin" && <Link to="admin">Admin panel</Link>}
        </nav>
      </div>
    );
  };
  
  
export default Header
  
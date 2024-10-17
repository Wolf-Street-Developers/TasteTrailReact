import { useEffect, useState } from "react";
import Avatar from "../components/Avatar/Avatar";
import { getUserRoles } from "../api/userService";
import "./User.css"



const User = () => {
    const [user, setUser] = useState()
    useEffect(()=>{getUserRoles().then((u)=>{setUser(u.data.user)})},[])

    return (
        <div className="user-container">
            <Avatar avatar={user?.avatarPath}/>
            <span>{user?.userName}</span>
        </div>
    );
  };
  
  
export default User
  
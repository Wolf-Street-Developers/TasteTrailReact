import { useState } from "react";
import { setRole, toggleBan, toggleMute } from "../../api/adminService";
import Button from "../Buttton/Button";
import "./UserItem.css"


const ROLES = {
    "Admin":"0",
    "User":"1",
    "Owner":"2"
}

const UserItem = ({item}) => {
    var {role, user} = item;
    const {email, id, isBanned, isMuted, userName} = user
    const [chosenRole, setChosenRole] = useState(ROLES[role])
    const [lastRole, setLastRole] = useState(ROLES[role])

    const handleSetRole = () => {
        if(chosenRole!==lastRole) {
            setLastRole(chosenRole)
            setRole(id, Number(chosenRole))
        }
    }

    const handleBan = () => {
        toggleBan(id)
    }

    const handleMute = () => {
        toggleMute(id)
    }

    return(
        <div className="user-item">
            <div className="user-item-info">
                <p>{userName}</p>
                <p>{email}</p>
                <select
                    name="selectedRole"
                    onChange={(e)=>setChosenRole(e.target.value)}
                    value={chosenRole}
                    className="user-item-role-select"
                >
                    <option value="1">User</option>,
                    <option value="2">Owner</option>,
                    <option value="0">Admin</option>,
                </select>
            </div>
            <div className="user-item-buttons">
                <Button className={chosenRole===lastRole ? "user-item-inactive-button" : 'user-item-active-button'} onClick={handleSetRole}>Set role</Button>
                {/* <Button className={isBanned ? "user-item-inactive-button" : "user-item-active-button"} onClick={handleBan}>{isBanned ? "Unban" : "Ban"}</Button>
                <Button className={isMuted ? "user-item-inactive-button" : "user-item-active-button"} onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</Button> */}
            </div>
        </div>
    )
}

export default UserItem
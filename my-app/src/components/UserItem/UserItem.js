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
                <Button style={chosenRole===lastRole ? {"backgroundColor": "gray", "cursor": "auto"} : {}} onClick={handleSetRole}>Set role</Button>
                <Button style={isBanned ? {} : {"backgroundColor": "orangered"}} onClick={handleBan}>{isBanned ? "Unban" : "Ban"}</Button>
                <Button style={isMuted ? {} : {"backgroundColor": "orangered"}} onClick={handleMute}>{isMuted ? "Unmute" : "Mute"}</Button>
            </div>
        </div>
    )
}

export default UserItem
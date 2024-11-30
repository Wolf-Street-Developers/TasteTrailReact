import { useState } from "react";
import "./LogInForm.css"
import Input from "../Input/Input";
import Button from "../Buttton/Button";
import { login } from "../../api/authService";
import { useNavigate } from 'react-router-dom';
import { useRole } from "../../RoleContext";
import { getUserRoles } from "../../api/userService";

const LogInForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const { updateRole } = useRole();

    const handleSubmit = (e)=>{
        e.preventDefault();
        login(email, password).then(()=>{getUserRoles().then(rolesResponse => {
          const role = rolesResponse.data.roles[0];
          updateRole(role);  // Set the role in global state
        }).then(()=>navigate('/'))}).catch(() => {})
    }

    return (
      <div className="Log-in-container">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <Input value = {email} onChange={(e)=>setEmail(e.target.value)} placeHolder="Email" required/>
          <label>Password</label>
          <Input value = {password} onChange={(e)=>setPassword(e.target.value)} placeHolder="Password" canBeHidden required maxlength={12}/>
          <div className="Log-in-buttons">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    );
  };
  
  
export default LogInForm
  
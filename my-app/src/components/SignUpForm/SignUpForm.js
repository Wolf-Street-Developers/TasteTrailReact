import { useState } from "react";
import "./SignUpForm.css"
import Input from "../Input/Input";
import Button from "../Buttton/Button";
import { register } from "../../api/authService";
import { useNavigate } from 'react-router-dom';
import { getUserRoles } from "../../api/userService";
import { useRole } from "../../RoleContext";

const SignUpForm = () => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();
    const { updateRole } = useRole();

    const handleSubmit = (e)=>{
        e.preventDefault();

        register(userName, email, password).then(()=>{getUserRoles().then(rolesResponse => {
          const role = rolesResponse.data.roles[0];
          updateRole(role);  // Set the role in global state
        }).then(()=>navigate('/'))}).catch(() => {})
    }

    return (
      <div className="Log-in-container">
        <form onSubmit={handleSubmit}>
          <div className="sign-up-label">Username</div>
          <Input value = {userName} onChange={(e)=>setUserName(e.target.value)} placeHolder="Name" required/>
          <div className="sign-up-label">Email</div>
          <Input value = {email} onChange={(e)=>setEmail(e.target.value)} placeHolder="Email" required/>
          <div className="sign-up-label">Password</div>
          <Input value = {password} onChange={(e)=>setPassword(e.target.value)} placeHolder="Password" canBeHidden required maxlength={12}/>
          <div className="Log-in-buttons">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    );
  };
  
  
export default SignUpForm
  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";
import User from "./pages/User";
import Venue from "./pages/Venue";
import MyVenue from "./pages/MyVenue";
import AdminDashboard from "./pages/AdminDashboard";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './api/axiosConfig';
import MyMenuPage from "./pages/MyMenuPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="menu" element={<Menu />} />
          <Route path="user" element={<User />} />
          <Route path="/venue/:id" element={<Venue />}/>
          <Route path="/myVenue" element={<MyVenue />}/>
          <Route path="/myVenue/:id" element={<MyMenuPage />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>

  );
}


export default App
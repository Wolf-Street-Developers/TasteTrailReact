import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Venues from "./pages/Venues";
import User from "./pages/User";
import Venue from "./pages/Venue";
import MyVenue from "./pages/MyVenue";
import AdminDashboard from "./pages/AdminDashboard";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './api/axiosConfig';
import MenuPage from "./pages/MenuPage";
import { RoleProvider } from "./RoleContext";
import CreateVenue from "./pages/CreateVenue";

function App() {
  return (
    <RoleProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="venues" element={<Venues />} />
          <Route path="user" element={<User />} />
          <Route path="/venue/:id" element={<Venue />}/>
          <Route path="/venue/:venueId/:menuId" element={<MenuPage />}/>
          <Route path="/myVenue" element={<MyVenue />}/>
          <Route path="/myVenue/:venueId/:menuId" element={<MenuPage />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/createVenue" element={<CreateVenue />}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </RoleProvider>
  );
}


export default App
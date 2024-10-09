import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './api/axiosConfig';

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
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>

  );
}


export default App
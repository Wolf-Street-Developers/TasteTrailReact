import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import LogIn from "./pages/LogIn";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
        <Route path="logIn" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
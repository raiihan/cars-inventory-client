import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Auth/Login";
import RequireAuth from "./Pages/Auth/RequireAuth";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";
import UpdateInventory from "./Pages/Home/UpdateInventory/UpdateInventory";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory/:inventoryId" element={<RequireAuth>
          <UpdateInventory />
        </RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

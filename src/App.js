import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Auth/Login";
import RequireAuth from "./Pages/Auth/RequireAuth";
import SignUp from "./Pages/Auth/SignUp";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import AddItems from "./Pages/Home/AddItems/AddItems";
import Home from "./Pages/Home/Home";
import ManageInventory from "./Pages/Home/ManageInventory/ManageInventory";
import MyItems from "./Pages/Home/MyItems/MyItems";
import UpdateInventory from "./Pages/Home/UpdateInventory/UpdateInventory";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";


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
        <Route path="additems" element={<RequireAuth>
          <AddItems />
        </RequireAuth>} />
        <Route path="manageinventory" element={<ManageInventory />} />
        <Route path="myitems" element={<RequireAuth>
          <MyItems />
        </RequireAuth>} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;

import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// pages
import { Dashboard } from "./Pages/DashboardPage";
import { ThisHome } from "./Pages/Home/HomePage";
import { BooksPage } from "./Pages/Books/BooksPage";
import { AboutPage } from "./Pages/About/AboutPage";
import { LoginAdmin } from "./Pages/Admin/Login";
import { NotFound } from "./Pages/NotFound/NotFound";
import PaginationAdmin from "./Pages/Admin/PaginationAdmin";

// components
import Register from "./Components/Register";
import Login from "./Components/Login";

import { AddBooks } from "./Components/Admin/AddBooks";
import { EditBooks } from "./Components/Admin/EditBooks";

import VerificationPage from "./Pages/VerificationPage";
import BooksDetail from "./Components/BooksDetail";

// style
import "./style/Global.css";

function App() {
  const navigate = useNavigate();
  const temp = useSelector((state) => state.checkSlice.value);
  const { username } = useSelector((state) => state.usersSlice.value);

  return (
    <>
      <Routes>
        <Route path="/" element={<ThisHome />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/verification/:token" element={<VerificationPage />} />

        <Route path="/login" element={temp ? <LoginAdmin /> : <Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/getdetail/:id" element={<BooksDetail />} />

        {/* route for admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/add" element={<AddBooks />} />
        <Route path="/dashboard/edit-book/:id" element={<EditBooks />} />
        {/* end of route for admin */}

        <Route path="/getdetail/:id" element={<BooksDetail />} />
        <Route path="/dashboard/paginationPage" element={<PaginationAdmin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

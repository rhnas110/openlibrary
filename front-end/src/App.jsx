import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// pages
import { Dashboard } from "./Pages/DashboardPage";
import { ThisHome } from "./Pages/Home/HomePage";
import { BooksPage } from "./Pages/Books/BooksPage";
import { AboutPage } from "./Pages/About/AboutPage";
import { LoginAdmin } from "./Pages/Admin/Login";
import { NotFound } from "./Pages/NotFound";

// components
import Register from "./Components/Register";
import Login from "./Components/Login";

// style
import "./style/Global.css";

function App() {
  const navigate = useNavigate();
  const temp = useSelector((state) => state.checkSlice.value);
  const user = useSelector((state) => state.usersSlice.id);
  return (
    <>
      <Routes>
        <Route path="/" element={<ThisHome />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* route for admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* end of route for admin */}
        <Route path="/register" element={<Register />} />

        {/* makes protection when user is true cannot open the login page */}
        {/* {user ? (
          <Route path="/" element={<NotFound />} />
        ) : (
          <Route path="/login" element={temp ? <LoginAdmin /> : <Login />} />
        )} */}

        <Route
          path={user ? navigate("/") : "/login"}
          element={temp ? <LoginAdmin /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;

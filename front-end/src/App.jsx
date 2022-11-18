import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/DashboardPage";
import { ThisHome } from "./Pages/HomePage";
import Register from "./Components/Register";
import Login from "./Components/Login";
import VerificationPage from "./Pages/VerificationPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ThisHome />} />
        {/* route for admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* end of route for admin */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verification/:token" element={<VerificationPage/>} />
      </Routes>
    </>
  );
}

export default App;

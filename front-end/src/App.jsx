import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Pages/DashboardPage";
import { ThisHome } from "./Pages/HomePage";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ThisHome />} />
        {/* route for admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* end of route for admin */}
        <Route path="/register" element= {<Register/>} />
      <Route path="/login" element= {<Login/>} />
      </Routes>
    </>
  );
}

export default App;

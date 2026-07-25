import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Public/Home/Home";
import About from "./pages/Public/About/About";
import Services from "./pages/Public/Services/Services";
import Contact from "./pages/Public/Contact/Contact";

import Login from "./pages/Admin/Login/Login";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Contacts from "./pages/Admin/Contacts/Contacts";
import Admins from "./pages/Admin/Admins/Admins";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Admin Login */}
      <Route path="/admin/login" element={<Login />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="admins" element={<Admins />} />
      </Route>
    </Routes>
  );
}

export default App;
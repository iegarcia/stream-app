import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import Register from "./views/Register";
import "./App.css";
import AuthProvider from "./context/AuthContext";
import ContentCategory from "./components/ContentCategory";
import ContentDetails from "./components/ContentDetails";
import Upcoming from "./components/Upcoming";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category/:genre" element={<ContentCategory />} />
          <Route path="/movie/details/:id" element={<ContentDetails />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

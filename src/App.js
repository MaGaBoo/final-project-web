import "./App.scss";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import NewPlant from "./views/Plants/NewPlant/NewPlant";
import EditPlant from "./views/Plants/EditPlant/EditPlant";
import PlantDetail from "./views/Plants/PlantDetail/PlantDetail";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from './views/Profile/Profile';
import { useAuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./guards/ProtectedRoute";

function App() {
  const { isAuthenticationFetched } = useAuthContext();

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {!isAuthenticationFetched ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


            <Route path="/" element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
              <Route path="plant/new" element={<NewPlant />} />
              <Route path="plant/:id/edit" element={<EditPlant />} />
              <Route path="plant/:id" element={<PlantDetail />} />
            </Route>
          </Routes>
        )}
      </div>
    <Footer/>
    </div>
  );
}

export default App;

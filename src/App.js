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
import Evergreen from './views/Categories/Evergreen/Evergreen';
import Orchids from './views/Categories/Orchids/Orchids';
import CactusAndSucculents from './views/Categories/CactusAndSucculents/CactusAndSucculents';
import { useAuthContext } from "./contexts/AuthContext";
import ProtectedRoute from "./guards/ProtectedRoute";
import Cart from "./components/Cart/Cart";

function App() {
  const { isAuthenticationFetched } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <Cart />

      <div className="container">
        {!isAuthenticationFetched ? (
          <p>Loading...</p>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/evergreen" element={<Evergreen />} />
            <Route path="/orchids" element={<Orchids />} />
            <Route path="/cactus-and-succulents" element={<CactusAndSucculents />} />


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

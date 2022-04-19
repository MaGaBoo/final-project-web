import logo from './logo.svg';
import './App.scss';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NewPlant from './views/Plants/NewPlant/NewPlant';
import EditPlant from './views/Plants/EditPlant/EditPlant';
import PlantDetail from './views/Plants/PlantDetail/PlantDetail';
import Register from './views/Register/Register';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plant/new" element={<NewPlant />} />
        <Route path="/plant/:id/edit" element={<EditPlant />} />
        <Route path="/plant/:id" element={<PlantDetail />} />
      </Routes>
    </div>
  );
}

export default App;

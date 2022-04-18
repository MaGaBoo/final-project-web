import logo from './logo.svg';
import './App.scss';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NewPlant from './views/Plants/NewPlant/NewPlant';
import EditPlant from './views/Plants/EditPlant/EditPlant';
import PlantDetail from './views/Plants/PlantDetail/PlantDetail';
import Register from './views/Register/Register';

function App() {
  return (
    <div className="App">
      <Home />
      <Register />
      <Login />
      <NewPlant />
      <EditPlant />
      <PlantDetail />
    </div>
  );
}

export default App;

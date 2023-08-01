import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import RocketsComponent from './components/Rockets';
import MissionsComponent from './components/Missions';
import DragonsComponents from './components/Dragons';
import ProfileComponent from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<RocketsComponent />} />
        <Route path="/missions" element={<MissionsComponent />} />
        <Route path="/dragons" element={<DragonsComponents />} />
        <Route path="/profile" element={<ProfileComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/profile" element={<MyProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

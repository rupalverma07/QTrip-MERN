import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router';
import Adventure from './pages/AdventurePage/Adventure';

function App() {


  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adventures' element={<Adventure />} />
      </Routes>
    {/* <Home /> */}
    </div>
  );
}

export default App;

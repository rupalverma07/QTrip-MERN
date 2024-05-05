import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header/Header';

function App() {


  
  return (
    <div>
      <Header />
    <Home />
    </div>
  );
}

export default App;

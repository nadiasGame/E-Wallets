import { Routes, Route, } from 'react-router-dom';
import './App.css';
import Home from './Views/Home';
import AddCard from './Views/AddCard'

function App() {
  return (
    <div className="App">
    
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/AddCard" element={ <AddCard /> } />
        </Routes>
       
    </div>
  );
}

export default App;
import './App.css';
import Navbar from './com/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';



function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/home' element={<Home/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;

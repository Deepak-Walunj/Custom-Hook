import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar.jsx'
import FetchYogaData from './Component/FetchYogaData.jsx'
import FetchFoodData from './Component/FetchFoodData.jsx';
import Home from './Component/Home.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route 
        path='/food' 
        element={<><Navbar /><FetchFoodData /></>} >
        </Route>
        <Route 
        path='/yoga'element={<><Navbar /><FetchYogaData /></>} ></Route>
      </Routes>
    </Router>
  )
}

export default App

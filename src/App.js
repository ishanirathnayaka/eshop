
import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./CheckOut";
import Login from "./Login"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




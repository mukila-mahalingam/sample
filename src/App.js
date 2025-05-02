import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import MyApp from './myApp';
import Portfolio from './portfolio';
import "./portfolio/portfolioCss.css";
import MainApp from "./myApp/main";

function App() {
  
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        <Routes>
          <Route path="/"element={<MyApp/>}/>
          <Route path="/main" element={<MainApp/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Test from "./componentes/Test";
import Login from "./componentes/Login";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom"; // permite cambiar la etiqueda a y herf por link y to
function App() {
  return (
    <Router>
  <div className="container">
    <Route exact path="/" component={Login}></Route>
    <Route path="/test/:nombre:apellido" component={Test}></Route>  
  </div>
  </Router>
  );
}

export default App;

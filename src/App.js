import NavScrollExample from "./Components/Navbar/Navbar";
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import Settings from "./Components/pages/setting/Settings";
import Single from "./Components/pages/single/Single"
import Write from "./Components/pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <Router>
  <NavScrollExample/>
  <Switch>
          <Route path="/Homepage">
          <Home/>
          </Route>
          <Route path="/Post/:postId">
          <Single/>
          </Route>
          <Route path="/Write">
          {user ? <Write/> : <Register/>} 
          </Route>
          <Route path="/Settings">
          {user ? <Settings/> : <Register/>}
          </Route>
          <Route path="/Register">
          {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/Login">
          {user ? <Home/> : <Login/>}
          </Route>
        </Switch>
   </Router> 
  );
}

export default App;

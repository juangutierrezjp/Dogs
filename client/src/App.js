import './App.css';
import Home from './views/home/home';
import NavBar from './components/NavBar/navBar.jsx';
import Landing from './views/landing/landing';
import {Route, useLocation} from "react-router-dom";
import Details from './views/details/Details';
import Form from './views/form/Form';


function App() {
  const location= useLocation();
  return (
    <div className="App">
    
      {location.pathname !== "/" && <NavBar className="barra"/>}
      <Route exact path="/" render={()=><Landing/>} />
      <Route exact path="/home" render={()=><Home />} />
      <Route path="/home/:dogId" component={Details} />
      <Route exact path="/crear" render={()=><Form/>} />

    </div>
  );
}

export default App;

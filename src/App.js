
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './component/Home';
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import GameHome from "./component/GameHome";
import { useStateValue } from "./component/StateProvide";
function App() {

 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/gamehome">
            <GameHome />
          </Route>
          <Route path="/join">
            <Signup />
         </Route>
          <Route path='/login'>
            <LoginPage/>
          </Route>
          <Route path='/'>
             <Home />
          </Route>      


        </Switch>
     
    </div>

    </BrowserRouter>
    
  );
}

export default App;

import { BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import Home from './component/Home';
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import GameHome from "./component/GameHome";
import CardContextProvider from "./component/StateProvide";
import LogOut from "./component/LogOut";


function App() {
   
 
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/logout">
            <LogOut/>
          </Route>
          <Route path="/gamehome">
            <CardContextProvider>
                <GameHome />
            </CardContextProvider>
            
          </Route>
          <Route path="/join">
            <CardContextProvider>
            <Signup />
            </CardContextProvider>
           
         </Route>
          <Route path='/login'>
            <CardContextProvider>
             <LoginPage/>
            </CardContextProvider>
           
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

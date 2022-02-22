import React , {Component} from "react"
import Home from "./home";
import { Route,Redirect,Switch } from 'react-router-dom'
import ShowMob from "./showMob";
class MainComp extends Component{

  render(){

     return(
     <React.Fragment>
          <Switch>
          
          <Route path="/home/Mobiles/:brand/:id" component={ShowMob}/>
        
          <Route path="/home" component={Home}/>
             
              
              <Redirect from="/" to="/home"/>
          </Switch>
     </React.Fragment>)

  }

}
export default MainComp;
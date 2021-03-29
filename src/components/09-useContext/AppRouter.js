import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

               <div className="container">
                <Switch>
                        <Route path="/about" component={ AboutScreen } />
                        <Route path="/login" component={ LoginScreen } />
                        <Route exact path="/" component={ HomeScreen } />
                        {/* Se puede declarar un 404Component para una ruta qe no se encuentre */}
                        <Route component={ HomeScreen }/>
                </Switch>
               </div>

            </div>
        </Router>
    )
}

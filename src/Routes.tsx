import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './core/components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = () => (
   <BrowserRouter>
      <NavBar />
         <Switch>
            <Route path="/" exact>
               <Home />
            </Route>

            <Route path="/search" exact>
               <Search />
            </Route>
         </Switch>
   </BrowserRouter>
);

export default Routes;
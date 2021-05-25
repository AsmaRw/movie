import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import Weekly from './views/Weekly'
import WeeklyBattle from './views/WeeklyBattle'
import Popular from './views/Popular'
import PopularBattle from './views/PopularBattle'
import Favorites from './views/Favorites'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <ul className="justify-content-center nav nav-tabs">
                        <li><Link className="dropdown-item" to="/">Home</Link></li>
                        <li><Link className="dropdown-item" to="/weekly">Weekly</Link></li>
                        <li><Link className="dropdown-item" to="/weekly-battle">Weekly Battle</Link></li>
                        <li><Link className="dropdown-item" to="/popular">Popular</Link></li>
                        <li><Link className="dropdown-item" to="/popular-battle">Popular Battle</Link></li>
                        <li><Link className="dropdown-item" to="/favorites">Favorites</Link></li>
                    </ul>
                    </div>
                </nav>
                
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/weekly" component={Weekly}/>
                    <Route exact path="/weekly-battle" component={WeeklyBattle}/>
                    <Route exact path="/popular" component={Popular}/>
                    <Route exact path="/popular-battle" component={PopularBattle}/>
                    <Route exact path="/favorites" component={Favorites}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;

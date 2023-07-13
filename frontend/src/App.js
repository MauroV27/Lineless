import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Home } from './pages/Home';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/products' component={Products} />
                </Switch>
            </Router>
        </>
    );
}

export default App;

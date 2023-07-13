import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Checkout } from './pages/Checkout';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/checkout' component={Checkout} />
                </Switch>
            </Router>
        </>
    );
}

export default App;

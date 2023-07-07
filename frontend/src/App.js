import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products } from './pages/Products';
import { Home } from './pages/Home';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    {/* <Route path='/' component={Home} /> */}
                    <Route path='/products' component={Products} />
                </Switch>
            </Router>
        </>
    );
}

export default App;

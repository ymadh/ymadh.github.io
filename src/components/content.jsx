import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Redux from './redux';
import Topics from './topics';
import About from './about';
import NoMatch from './noMatch';

const Content = () => {
    return ( 
        <HashRouter>
            <Switch>
            <Route path="/redux">
                <Redux />
            </Route>
            <Route path="/topics">
                <Topics />
             </Route>
             <Route path="/" exact>
                <About />
             </Route>
             <Route>
                <NoMatch />
            </Route>
            </Switch>
        </HashRouter>
        
     );
}
 
export default Content;
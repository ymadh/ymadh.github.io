import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import Redux from './redux';
import Topics from './topics';
import About from './about';
import NoMatch from './noMatch';

const Content = () => {
    return ( 
        <HashRouter>
            <Route path="/redux">
                <Redux />
            </Route>
            <Route path="/topics">
                <Topics />
             </Route>
             <Route path="/" exact>
                <About />
             </Route>
             <Route path="*">
                <NoMatch />
            </Route>
        </HashRouter>
        
     );
}
 
export default Content;
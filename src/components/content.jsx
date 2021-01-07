import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Redux from './redux';
import Algorithms from './algorithms';
import About from './about';
import NoMatch from './noMatch';

const Content = () => {
    return ( 
        <Switch>
            <Route path="/redux">
                <Redux />
            </Route>
            <Route path="/algorithms">
                <Algorithms />
             </Route>
             <Route path="/" exact>
                <About />
             </Route>
             <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
        
     );
}
 
export default Content;
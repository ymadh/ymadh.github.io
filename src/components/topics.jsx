import React from 'react';
import Insertion from './topics/sortalgorithms/insertion';
import { NavLink, Switch, Route } from 'react-router-dom';
import ContextExample from './contextapi/contextExample';
import Hoc from './hoc/hoc';
import Hooks from './hooks/hooks';

const Topics = () => {
    return ( 
        <main className="bg-light">

            <section>
            <div className="container">

                        <h2 className="text-center">Testing / Playground</h2>
                        <p>This is an area to play with a variety of concepts.</p>
                            <ul className="secondaryNav nav nav-links mt-3">
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/topics">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/topics/insertion-sort">Insertion Sort</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/topics/context-example">Context Example</NavLink>
                                </li>
                                
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/topics/hoc">HOC</NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName="active" className="nav-link" to="/topics/hooks">Custom Hooks</NavLink>

                                </li>
                                {/*<li className="nav-item">
                                Error Boundaries
                                </li> 
                                Service Workers*/}
                  
                            </ul>
                    
                    <div className="justify-center">
                        <Switch>
                            <Route path="/topics/insertion-sort">
                                <Insertion />
                            </Route>
                            <Route path="/topics/context-example">
                                <ContextExample />
                            </Route>
                            <Route path="/topics/hoc">
                                <Hoc />
                            </Route>
                            <Route path="/topics/hooks">
                                <Hooks />
                            </Route>
                        </Switch>
                         {/* <p>Services - https://medium.com/@alshdavid/react-state-and-services-edb95be48851</p> */}
                  
                         </div>
                         </div>
 
            </section>
        </main>
     );
}
 
export default Topics;
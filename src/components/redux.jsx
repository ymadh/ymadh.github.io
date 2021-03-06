import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import PostList from './postList';
import Store from './store';
import NoMatch from './noMatch';

const Redux = () => {
    return (
        <main className="bg-light">

            <div className="className container">
                <section className="py-3 text-center">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h2>React / Redux / Node Examples</h2>
                            <hr />
                            
                            <a href="https://github.com/ymadh/ymadh.github.io" className="mr-3 btn btn-secondary">React Repo</a>
                            <a href="https://github.com/ymadh/node" className="btn btn-secondary">Node Repo</a>

                        </div>
                    </div>
                </section>

      
                    
                 
                    
                <section>
                <div className="container">
                    <ul className="secondaryNav nav nav-pills mt-3">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/redux">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/redux/store">Store</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/redux/post">Blog Posts</NavLink>
                        </li>

                    </ul>
                    <Switch>
                        <Route path="/redux/post">
                            <PostList />
                        </Route>
                        <Route path="/redux/store">
                            <Store />
                        </Route>
                        
                        <Route path="/redux" exact>
                            <ReduxText />
                        </Route>

                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                    </div>
                </section>
            </div>

        </main>
    );
}

function ReduxText() {
    return (
        <div>
            <hr />
            <h3>Store</h3>
            <p><strong>React, Redux</strong> and <strong>Node</strong> example of a shopping cart</p>
            <p>This app connects to a node based api hosted on Heroku. It pulls a list of products and stores it in the
                redux store. Still left to tackle - adding JWT authentication and a sample admin area for managing products.
            </p>
            <hr />
            
            <h3>Blog Posts</h3>
                <p><strong>React / Redux</strong> example of a list of blog posts with pagination</p>
            <p>Fetches a list of blogs from https://jsonplaceholder.typicode.com/ - features include
                pagination / changing the number of items per page, disabling buttons - all in redux & react.
            </p>
        </div>
    );
}
export default Redux;
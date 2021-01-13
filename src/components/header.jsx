import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return ( 
        <header>
            <nav className="row navbar navbar-light bg-white">
                <div className="col-1 text-right offset-md-1">
                    <img alt="Amy Wightman" className="rounded-circle" src="https://media-exp1.licdn.com/dms/image/C4D03AQEqTr3b0p-IjA/profile-displayphoto-shrink_200_200/0/1600640077493?e=1615420800&amp;v=beta&amp;t=WVmPIY8lvEnWoXVjmX5AiL8vnbjSlgkCpLG4BA1pKO0" />
                </div>
                <div className="col-md-4">
                    <h2>Amy Wightman</h2>
                </div>
                <div className="col-md-6 text-center">
                    <ul className="list-inline">
                        <li className="list-inline-item navbar-brand">
                            <NavLink to="/" exact activeClassName="active">
                                <i className="fa fa-address-card fa-lg"></i>
                                About
                            </NavLink>
                        </li>
                        <li className="list-inline-item navbar-brand">
                            <NavLink to="/redux" activeClassName="active"><i className="fa fa-lock fa-lg"></i>React</NavLink>
                        </li>
                        <li className="list-inline-item navbar-brand">
                            <NavLink to="/topics" activeClassName="active">
                            <i className="fa fa-file fa-lg"></i>
                            Topics
                            </NavLink>
                        </li>
                        <li className="list-inline-item navbar-brand">
                            <a href="https://github.com/ymadh/ymadh.github.io">
                            <i className="fa fa-github fa-lg"></i>
                            Github
                            </a>
                        </li>
                        <li className="list-inline-item navbar-brand">
                            <a href="https://www.linkedin.com/in/amydunphy/">
                            <i className="class fa fa-linkedin fa-lg"></i>
                            LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
    return ( 
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="list-group list-group-flush">
                <Link className="list-group-item list-group-item-action bg-light" to="/">Dashboard</Link>

                <Link className="list-group-item list-group-item-action bg-light" to="/random-images">Random Images</Link>
                
            </div>
        </div>
     );
}
 
export default Sidenav;
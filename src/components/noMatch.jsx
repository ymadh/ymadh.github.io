import React from 'react';
import { useLocation } from 'react-router-dom';
const NoMatch = () => {
    let location = useLocation();

    return (
      <div>
        <p>
          No match for <code>{location.pathname}</code>
        </p>
      </div>
    );;
}
 
export default NoMatch;
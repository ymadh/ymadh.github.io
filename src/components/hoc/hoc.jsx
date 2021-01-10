// higher order component
// function that takes a component a returns a new component
// ie redux: connext; relay: createFragmentContainer
// for code reusability
// now that hooks are around we dont use HOC as much anymore.

// higher order function, creates a function and returns a function;
import React from 'react';

import User from './user.jsx';
// fixes the component name
import withUserId from './withUserId';

const LoadUser = withUserId(User);

const Hoc = () => {

   
    return ( 
        <div>
            <LoadUser userId={3} />        
            <LoadUser userId={4} />   
        </div>
     );
}
 
export default Hoc;
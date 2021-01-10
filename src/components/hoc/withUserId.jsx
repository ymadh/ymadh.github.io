import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getDisplayName } from 'recompose';


const withUserId = Component => {

    const NewComponent = ({userId, ...props}) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            // could get user from auth
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => {
                setUser(res.data);
            });

        }, []); 

        if (!user) return "Loading...";
        return <Component {...props} user={user} />;
    }

    NewComponent.displayName = `WithUserId(${getDisplayName(Component)})`

    return NewComponent;
}

export default withUserId;
import React, { useEffect, useState, useRef } from 'react';

function useEventListener(eventType, handler) {
    const handlerRef = useRef(handler);

   useEffect(() => {
       handlerRef.current = handler;
   })

    useEffect(() => {

        // shoud run once
        console.log('effect ran');
        function internalHandler(e) {
            return handlerRef.current(e);
        }
        document.addEventListener(eventType, internalHandler);

        // clean up
        return () => document.removeEventListener(eventType, internalHandler);
    }, [eventType]);
}


const Hooks = () => {

    const [count, setCount] = useState(0);

    useEventListener('click', () => {
        // will log on every click
        console.log('you clicked');
    });


    return ( 
        <div>
            <h4>Click anywhere on the page</h4>
            <button className="btn btn-primary" onClick={() => setCount(c => c+1)}>{count}</button>
        </div>
     );
}
 
export default Hooks;
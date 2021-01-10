import React, { Component } from 'react';
import ContextExampleGrandChild from './contextExampleGrandChild';
import ContextExampleHook from './contextExampleHook';

class ContextExampleChild extends Component {
  
    render() { 
       
        return ( 
            <div className="card">
            <div className="card-title text-primary bg-light border-bottom text-center">Primary Child</div>
                <div className="card-body">
                    <div>This page doesn't have any styling, because we haven't accessed the context provider</div>
                    <div><ContextExampleGrandChild /></div>
                    <div><ContextExampleHook /></div>
                </div>
            </div>
         );
    }
}
 
export default ContextExampleChild;

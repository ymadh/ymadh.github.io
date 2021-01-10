import React, { Component } from 'react';
import { ThemeContext } from './context/themeContext';

class ContextExampleGrandChild extends Component {
    
    // look up the tree to find the context provider
    static contextType = ThemeContext;
   
    render() { 
        const { isLightTheme, light, dark } = this.context;
    
        const theme = isLightTheme ? light : dark;
    
        return ( 
            <div className="card">
            <div className="card-title text-center" style={{ background: theme.ui, color: theme.syntax }}>
            Grand Child</div>
            <div className="card-body" style={{ background: theme.ui, color: theme.syntax }}>
            This page has different colors because it accessed the 
            theme from the root class with a context provider</div>
            </div> );

    }
}
 
export default ContextExampleGrandChild;

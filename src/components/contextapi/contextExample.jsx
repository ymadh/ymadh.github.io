import React from 'react';
import ContextExampleChild from './contextExampleChild';
import ThemeContextProvider from './context/themeContext';
import ThemeToggle from './themeToggle';

const ContextExample = () => {
    return ( 
        <div className="container">
                <h3>Context Example Root</h3>
                <div>
                    <p>Similar to how redux behaves - allows for shared state, shared themes without passing props to all the children</p>
                    <p>Recommended for authentication information, themes, or preferred language</p>
                    <p>Here is our tree</p>
                    <ul>
                        <li>contextExample -> Context Provider</li>
                        <li>contextExampleChild</li>
                        <li>contextExampleGrandChild -> Access Context Provider</li>
                        <li>contextExampleHook -> Access Context Provider</li>
                    </ul>
                </div>

                <div>
                    <div>Render Children Example:</div>
                    <ThemeContextProvider>
                        <ThemeToggle />
                        <ContextExampleChild />
                    </ThemeContextProvider>

                </div>
            </div>
     );
}
 
export default ContextExample;

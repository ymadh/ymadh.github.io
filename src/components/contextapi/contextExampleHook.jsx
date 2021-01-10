import React from 'react';
import { ThemeContext } from './context/themeContext';

const ContextExampleHook = () => {
    return ( 
            <ThemeContext.Consumer>
                {(context => {
                     const { isLightTheme, light, dark } = context;
                     const theme = isLightTheme ? light : dark;
                
                    return (
                        <div className="card mt-3">
                        <div className="card-title text-center" style={{ background: theme.ui, color: theme.syntax }}>
                        Grand Child - SFC </div>
                        <div className="card-body" style={{ background: theme.ui, color: theme.syntax }}>
                        Accesses the context in a different way to work with SFC</div>
                        </div>
                    );
                })}
            </ThemeContext.Consumer>
     );
}
 
export default ContextExampleHook;
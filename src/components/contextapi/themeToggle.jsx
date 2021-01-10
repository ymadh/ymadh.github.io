import React, { Component } from 'react';
import { ThemeContext } from './context/themeContext';

class ThemeToggle extends Component {

    static contextType = ThemeContext;

    render() { 
        const { toggleTheme, isLightTheme } = this.context;
        return (
            <button className="btn btn-primary" onClick={toggleTheme}>Toggle {isLightTheme ? 'Dark' : 'Light'}</button>
          );
    }
}
 
export default ThemeToggle;
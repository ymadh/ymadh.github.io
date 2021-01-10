import React, { Component, createContext } from 'react';

// create the context
export const ThemeContext = createContext();

// create a class (provider) with a state of data that will be shared

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'
        },
        dark: {
            syntax: '#ddd',
            ui: '#333',
            bg: '#555'
        }
     };

     toggleTheme = () => {
         this.setState({isLightTheme: !this.state.isLightTheme});
     }

    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>

                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;


import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// example
import RaisedButton from "material-ui/RaisedButton";

import "./App.css";

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                Hello
                <RaisedButton label="Material UI" />
            </MuiThemeProvider>
        );
    }
}

export default App;

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

// material imports
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

import "./App.css";

const style = {
    margin: 12,
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="Free the nipple"
                    onLeftIconButtonClick={this.handleToggle}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <Drawer open={this.state.open}>
                    <RaisedButton style={style} label="Close Drawer" onClick={this.handleToggle} />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </MuiThemeProvider>
        );
    }
}

export default App;

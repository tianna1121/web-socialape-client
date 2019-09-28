import React, { Component } from "react";

// * Material UI stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <ToolBar>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Signup</Button>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navbar;

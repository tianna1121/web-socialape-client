import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const styles = theme => ({
  ...theme.spreadIt
});

class Profile extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));

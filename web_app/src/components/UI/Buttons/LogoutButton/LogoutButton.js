import React from "react";
import classes from './LogoutButton.module.css';

import { useNavigate } from "react-router-dom";

//redux
import * as actions from '../../../../store/actions/index';
import { connect } from "react-redux";

const LogoutButton = (props) => {
    const {onLogout} = props;
    const navigate = useNavigate();
    const logoutHandler = () => {
        onLogout();
        navigate(0);
    }

    return (
        <React.Fragment>
            <button className={classes.LogoutButton} onClick={logoutHandler}>Sign Out</button>
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
      onLogout: () => dispatch(actions.logout())
    };
  };

export default connect(null, mapDispatchToProps)(LogoutButton);
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import UserAccount from "../account/UserAccount";

const styles = {
  navBarSpacer: {
    height: 75
  },
  grow: {
    flexGrow: 1
  }
};

function Navigation(props) {
  const { classes } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsername();
  }, [user]);

  async function fetchUsername() {
    const res = await fetch("/api/account");
    if (user === null) {
      const json = await res.json();
      setUser(json[0].user);
    }
  }

  function onLogout() {
    setUser(null);
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.grow}
          >
            Steam Game Picker
          </Typography>
          {user === null ? (
            <Button href="/auth/steam">
              <img
                src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
                alt="sign in logo"
              />
            </Button>
          ) : (
            <UserAccount user={user} onLogout={onLogout} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Navigation);

import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import gameImage from "../images/game_example.png";
import Button from "@material-ui/core/Button";

function Landing() {
  return (
    <Grid
      style={{ padding: 20, textAlign: "center" }}
      container
      justify="center"
      direction="column"
      alignItems="center"
      spacing={24}
    >
      <Grid item>
        <Typography variant="h4">
          Getting chills deciding the next game to play after the Winter Sale?
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          Feeling the heat after buying too many games on Summer Sale?
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">
          Click the top right and sign in with steam and let this rando tool
          choose for you!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption">
          (Note: You'll need to set your profile to public, see below...)
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          href="https://support.steampowered.com/kb_article.php?ref=4113-YUDH-6401"
          target="_blank"
          rel="noopener"
        >
          Steam article on setting profile to public Link
        </Button>
      </Grid>
      <Grid item>
        <Typography>Example...</Typography>
        <Paper>
          <img style={{ maxWidth: "100%" }} src={gameImage} alt="example" />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Landing;

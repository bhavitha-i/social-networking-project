import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { getThemeProps } from "@material-ui/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    width: "350px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function JukeBox(props) {
  const classes = useStyles();
  const theme = useTheme();
  let audio = new Audio(props.song.audiolink);

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.song.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.song.artist}
          </Typography>
        </CardContent>

        <div className={classes.controls}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* onClick={audio.play()} */}
          <audio style={{ width: "120px" }} controls src={props.song.audiolink}>
            <code>audio</code> element.
          </audio>

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.song.cover}
        title="Live from space album cover"
      />
    </Card>
  );
}

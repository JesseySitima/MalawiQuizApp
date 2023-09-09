
import { Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
    },
  }));

const Homepage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h4' component='h1'>
                Homepage
            </Typography>
        </div>
    );
}
export default Homepage;
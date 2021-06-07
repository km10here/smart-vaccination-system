import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import image2 from "../images/get-vaccinated.svg";
const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
  input: {
    padding: "10px 5px",
  },
  label: {},
});
function Login() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.root}>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            background: "#09095B",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={image2} style={{ display: "flex" }}></img>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
                          padding: "4vw",
              width:"100vw",
            }}
          >
            <Box style={{ display: "flex" }}>
              <Typography variant="h1">Login</Typography>
            </Box>
            <br></br>
            <Box style={{ display: "flex" }}>
              <form noValidate autoComplete="off" style={{ display: "flex" }}>
                <Grid container spacing={4}>
                  <Grid item xs={3} md={4}>
                    <label for="username" className={classes.label}>
                      username
                    </label>
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <input
                      type="text"
                      name="username"
                      className={classes.input}
                    ></input>
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <label for="username" className={classes.label}>
                      username
                    </label>
                  </Grid>
                  <Grid item xs={9} md={8}>
                    <input
                      type="text"
                      name="username"
                      className={classes.input}
                    ></input>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Login;

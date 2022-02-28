import Button from "@mui/material/Button";
import logo from "../images/newLogo.png";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <Grid container >
      <Grid
        container
        px={4}
        mt={5}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        style={{ background: "black", height: "10px" }}
      >
        <Grid item xs={8}>
          <div style={{ width: "50px", height: "10%" }}>
            <img
              src={logo}
              style={{ transform: " scale3d(1.5, 1.5, 1.5)", width: "100%" }}
              className="w-100"
            />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Grid container justifyContent={"space-between"} display={"flex"}>
            <i class="fa-brands fa-instagram sicons"></i>
            <i class="fa-brands fa-twitter sicons"></i>
            <i class="fa-brands fa-facebook sicons"></i>
            <i class="fa-brands fa-discord sicons"></i>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Footer;

import Button from "@mui/material/Button";
import logo from "../images/newLogo.png";
import Grid from "@mui/material/Grid";

import "./main.css";

function Footer() {
  return (
    <Grid container>
      <Grid
        container
        px={2}
        mt={5}
        display={"flex"}
        alignItems={"center"}
        style={{ background: "black", height: "60px" }}
        className="footer_section"
      >
        <Grid item xs={8}>
          <div style={{ width: "40px", height: "40%" }}>
            <img
              src={logo}
              style={{ transform: " scale3d(1.5, 1.5, 1.5)", width: "50px" }}
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

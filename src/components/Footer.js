import {Grid,useMediaQuery} from '@mui/material';
import logo from '../images/footer_logoWithText_white.svg';
import fsIcon1 from '../images/fsIcon1.svg';
import fsIcon2 from '../images/fsIcon2.svg';
import { useTheme } from '@mui/material/styles';

function Footer(){
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Grid container className='footer mb-0' px={smallScreen?1:5}>
           <Grid container>
               <Grid item xs={12} md={4} px={smallScreen?1:5} >
                 <img src={logo} alt='logo' className='footerLogo w-100'/>
               </Grid>
               <Grid item xs={12} md={8}>
                    <Grid container p={smallScreen?1:5} >
                        <Grid item xs={6} md={3}>
                            <p className='footerSmText'>RESTAURANT</p>
                            <a className='footerItem'>Home</a><br/>
                            <a className='footerItem'>About</a><br/>
                            <a className='footerItem'>Become a Member</a>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <p className='footerSmText'>HELP</p>
                            <a className='footerItem'>How It Works</a><br/>
                            <a className='footerItem'>FAQs</a><br/>
                            <a className='footerItem'>Contact</a>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <p className='footerSmText'>Contact</p>
                            <a className='footerItem'>Member Sign In</a><br/>
                            <a className='footerItem'>Reservations</a><br/>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <p className='footerSmText'>LEGAL</p>
                            <a className='footerItem'>Terms of Use</a><br/>
                            <a className='footerItem'>Privacy Policy</a><br/>
                        </Grid>
                    </Grid>
               </Grid>
           </Grid>
           <Grid container px={5} className='hrFooter mt-5'></Grid>
           <Grid container px={5} className='hrFooter mt-1'></Grid>
           <Grid container  mt={2} justifyContent={'space-between'}>
                <Grid item md={6}>
                  <Grid container>
                    <Grid item xs={6} md={3} className=''>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={fsIcon1} alt='fsIcon1' className='socialIcon' />
                            <p className='socialIconText my-0'>Flyfish Club</p>
                         </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={fsIcon2} alt='fsIcon1' className='socialIcon' />
                            <p className='socialIconText my-0'>Flyfish Club</p>
                         </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={fsIcon1} alt='fsIcon1' className='socialIcon' />
                            <p className='socialIconText my-0'>Flyfish Club</p>
                         </div>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={fsIcon1} alt='fsIcon1' className='socialIcon' />
                            <p className='socialIconText my-0'>Flyfish Club</p>
                         </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                    <p className='copyri8Text'>Copyright ©2021-2022 VCR Group. All rights reserved.</p>
                    <p className='copyri8Text'>For all press and media inquiries, email <a className='footerEmail'>press@vcrgroup.com</a></p>
                </Grid>
           </Grid>
        </Grid>
    )
}
export default Footer;
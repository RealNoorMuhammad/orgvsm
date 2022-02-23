import {Grid} from '@mui/material';
import { Button } from 'react-bootstrap';
function Section7(){
    return(
        <div className="section7">
            <Grid container justifyContent={'center'}>
                <Grid item xs={10} md={8}>
                 <h1 className='section7Head1'>Stay Informed</h1>
                 <Grid container>
                     <Grid item xs={12} md={5}>
                       <p className='informPara'>Get the latest information about this NFT drop and updates about the project</p>
                     </Grid>
                     <Grid item xs={12} md={7} >
                         <Grid container spacing={2}>
                                <Grid item md={8}>
                                   <input name="email" placeholder="Your email address" id="email" class="emailInput"></input>
                                </Grid>
                                <Grid item md={4}>
                                  <Button variant="outline-success" className='mailingBtn w-100'>Join mailing list</Button>
                                </Grid>
                         </Grid>
                     </Grid>
                 </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default Section7;
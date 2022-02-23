import {Grid} from '@mui/material';
import head1 from '../images/head1.png';
import head2 from '../images/head2.png';
import head3 from '../images/head3.png';
import head4 from '../images/head4.png';
import { Button } from 'react-bootstrap';

function Section6(){
    return (
        <Grid container px={5}>
           <h1 className='text-center w-100 my-5'>Our team is perfectly crafted</h1>
              <Grid container justifyContent={'center'} px={5} spacing={10} >
                    <Grid item xs={12} md={3}>
                          <img src={head1} alt='head1' className='w-100'/>
                          <p className='mt-3 teamTitle'>Founder & Chairman</p>
                          <h3 className='teamName'>GARY VAYNERCHUK</h3>
                          <p>Gary Vaynerchuk is the chairman of VaynerX, a modern-day media and communications holding company and the active CEO of VaynerMedia, a full-service advertising agency servicing Fortune 100 clients...</p>
                          <Button className='learnMoreBtn'>Learn More</Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                          <img src={head2} alt='head1' className='w-100'/>
                          <p className='mt-3 teamTitle'>Founder & Chairman</p>
                          <h3 className='teamName'>GARY VAYNERCHUK</h3>
                          <p>Gary Vaynerchuk is the chairman of VaynerX, a modern-day media and communications holding company and the active CEO of VaynerMedia, a full-service advertising agency servicing Fortune 100 clients...</p>
                          <Button className='learnMoreBtn'>Learn More</Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                          <img src={head3} alt='head1' className='w-100'/>
                          <p className='mt-3 teamTitle'>Founder & Chairman</p>
                          <h3 className='teamName'>GARY VAYNERCHUK</h3>
                          <p>Gary Vaynerchuk is the chairman of VaynerX, a modern-day media and communications holding company and the active CEO of VaynerMedia, a full-service advertising agency servicing Fortune 100 clients...</p>
                          <Button className='learnMoreBtn'>Learn More</Button>
                    </Grid>
                    <Grid item xs={12} md={3}>
                          <img src={head4} alt='head1' className='w-100'/>
                          <p className='mt-3 teamTitle'>Founder & Chairman</p>
                          <h3 className='teamName'>GARY VAYNERCHUK</h3>
                          <p>Gary Vaynerchuk is the chairman of VaynerX, a modern-day media and communications holding company and the active CEO of VaynerMedia, a full-service advertising agency servicing Fortune 100 clients...</p>
                          <Button className='learnMoreBtn'>Learn More</Button>
                    </Grid>
              </Grid>
              <Grid container my={5} justifyContent={'center'}>
                    <Grid item xs={12} md={6}>
                        <h2 className='text-center readyToMember mt-5'>Ready to become a member?</h2>
                        <div className='text-center my-5'>
                            <Button className='memberBtn py-2'>Become a member</Button>
                        </div>
                    </Grid>
              </Grid>
        </Grid>
    )
}
export default Section6;
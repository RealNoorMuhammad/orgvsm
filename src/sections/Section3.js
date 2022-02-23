import {Grid,useMediaQuery} from '@mui/material';
import { Button } from 'react-bootstrap';
import { useTheme } from '@mui/material/styles';


function Section3(){
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return(
    <>
     <Grid  py={5} container className='section3 ' justifyContent={'center'}>
          <Grid item xs={12} md={8} px={smallScreen?5:0} >
               <h2 className='text-center mt-5 section3Head1'>Exclusive Dining</h2>
               <p className='text-center'>FFC members will have unlimited access to a private dining room that will span across 10,000+ square feet in an iconic, New York City location. The space will consist of a bustling cocktail lounge, upscale restaurant, intimate omakase room, and an outdoor space.</p>
               <Grid container  className=' mt-5' justifyContent={'center'}>
                    <Grid item xs={12} md={10} display={'flex'} justifyContent={'center'} flexWrap={'wrap'}>
                      <Button variant="outline-success" className='diningBtn my-2 py-2 '>About the restaurant</Button>
                      <Button variant="outline-success" className='diningBtn my-2 py-2'>How it works</Button>
                      <Button variant="outline-success" className='diningBtn my-2 py-2'>FAQs</Button>
                    </Grid>
                </Grid>
          </Grid>
     </Grid>
    </>
  );
}

export default Section3
import {Grid} from '@mui/material';
import { Button } from 'react-bootstrap';
import arr from '../images/arr.PNG';
import tick from '../images/tick.PNG';

function Section5(){
    return(
     <div className="section5">
       <Grid container px={5}>
          <h2 className='sec5head1 text-center w-100'>Which token is right for me?</h2>
          <Grid container justifyContent={'center'}>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2} style={{position:'relative'}} justifyContent={'center'} >
                    <div className='aboveToken'></div>
                    <Grid item  xs={4} md={4}>
                       <div className='token1'></div>
                    </Grid>
                    <Grid item xs={4} md={4}>
                          <div className='token2'></div>
                    </Grid>
                    <Grid item  xs={4} md={4}>
                          <div className='token2'></div>
                    </Grid>
                    <div className='upperTokenText'>
                        <Grid container spacing={2} justifyContent={'center'} >
                            <Grid item  xs={4} md={4}>
                                <div className='text-center  topTokenText firstToken'>
                                    <p style={{color:'transparent'}}>klsajkdsfj</p>
                                </div>
                               <div className='text-center tokenStart'>
                                   <div style={{borderColor:'transparent'}} className='tokanCan1'>
                                       <p className='lefttokenpara textStyle'>Membership cost</p>
                                   </div>
                               </div>
                               <div className='text-center tokenS'>
                                   <div className='tokenSCan2'>
                                       <p className='lefttokenpara textStyle'>Token availablity</p>
                                   </div>
                               </div>
                               <div className='text-center tokenS'>
                                   <div className='tokenSCan2'>
                                       <p className='lefttokenpara textStyle'>Artwork</p>
                                   </div>
                               </div>
                               <div className='mt-5'>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <p style={{position:'absolute',marginTop:'-16px',fontSize:'12px'}} className='lefttokenpara leftSmText'>ACCESS</p>
                                            <div>
                                                <p className='lefttokenpara textStyle'>Events & Pop-ups</p>
                                                <p style={{position:'absolute',marginTop:'-12px',fontSize:'12px'}} className='lefttokenpara leftSmText'>(physical & virtual)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <p className='lefttokenpara textStyle'>Outdoor Lounge</p>
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <p className='lefttokenpara textStyle'>Cocktail Lounge</p>
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <p className='lefttokenpara textStyle'>Main Dining Room</p>
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <p className='lefttokenpara textStyle'>Omakase Room</p>
                                        </div>
                                    </div>
                               </div>
                            </Grid>
                            <Grid item  xs={4} md={4}>
                                <div className='text-center mt-4 topTokenText'>
                                    <p className='lastHead'>Flyfish (FF)</p>
                                </div>
                               <div className='text-center tokenStart'>
                                   <div className='tokanCan1'>
                                      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img className='mb-3' src={arr} alt='arr'/><p className='mb-3 textStyle'>2.5</p></div> 
                                   </div>
                               </div>
                               <div className='text-center tokenS'>
                                   <div className='tokenSCan1'>
                                       <p className='textStyle'>2650 NFTs</p>
                                   </div>
                               </div>
                               <div className='text-center tokenS'>
                                   <div className='tokenSCan2'>
                                       <p className='textStyle'>1 Design</p>
                                   </div>
                               </div>
                               <div className='tickStart'>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <img className='mb-4 mt-2' src={tick} alt='tick' />
                                        </div>
                                    </div>
                               </div>
                               <div className='tokenS mt-5'>
                                   <Button variant="outline-success" className='diningBtn py-2 w-100'>Buy Now</Button>
                               </div>
                            </Grid>
                            <Grid item  xs={4} md={4}>
                                <div className='text-center mt-4 topTokenText'>
                                    <p className='lastHead'>Flyfish Omakase (FFO)</p>
                                </div>
                               <div className='text-center tokenStart laststart'>
                                   <div className='tokanCan1'>
                                       <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}><img className='mb-3' src={arr} alt='arr'/><p className='mb-3 textStyle '>4.25</p></div> 
                                   </div>
                               </div>
                               <div className='text-center tokenS'>
                                   <div className='tokenSCan1'>
                                       <p className='textStyle'>385 NFTs</p>
                                   </div>
                               </div>
                               <div className='text-center tokenS'>
                                   <div className='tokenSCan2'>
                                       <p className='textStyle'>7 Designs</p>
                                   </div>
                               </div>
                               <div className='tickStart'>
                                    <div className='text-center tokenS '>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan1'>
                                            <img className='mb-4' src={tick} alt='tick' />
                                        </div>
                                    </div>
                                    <div className='text-center tokenS'>
                                        <div className='tokenSCan2'>
                                            <img className='mb-4 mt-2' src={tick} alt='tick' />
                                        </div>
                                    </div>
                               </div>
                               <div className='tokenS mt-5'>
                                   <Button variant="outline-success" className='diningBtn py-2 w-100'>Buy Now</Button>
                               </div>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
              </Grid>
          </Grid>
       </Grid>
     </div>
    );
}
export default Section5;
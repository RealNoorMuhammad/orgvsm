import {Grid} from '@mui/material';

function Section4(){
    return(
        <Grid container className='section4'>
            
             <div className='section4BGDiv'>
                <div className='circleDiV' style={{left:'14em',transform: 'translateY(18.1333px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{left:'2em',transform: 'translateY(309.65px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{left:'-2em',transform: 'translateY(832.857px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{left:'10em',transform: 'translateY(612px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{right:'12em',transform: 'translateY(908px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{right:'-4em',transform: 'translateY(728.811px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{right:'12em',transform: 'translateY(480.316px) translateZ(0px)'}}></div>
                <div className='circleDiV' style={{right:'2em',transform: 'translateY(307.25px) translateZ(0px)'}}></div>
                {/*  */}
             </div>
             <Grid container py={3} className='bUpperDiv'>
                    <Grid item md={8} xs={10} className='section4UpperDiv'>
                    <p className='membership'>Membership Allocation</p>
                    <div className='mt-3 upperDivTexts'>
                        
                        <div>
                            <p className='ut1'>Presale: 350 Tokens</p>
                            <p className='ut2'>252 FLYFISH & 98 FLYFISH OMAKASE</p>
                            <p className='ut3'>Private sale on Dec. 15th, 2021 for investors, partners and contributors that have helped us along the way</p>
                        </div>
                        <div className='mt-3 w-100'>
                            <p className='ut1'>Public Launch: 1,151 Tokens</p>
                            <p className='ut2'>948 FLYFISH & 203 FLYFISH OMAKASE</p>
                            <p className='ut3'>Allocated to public launch on Jan. 7th at 11 am, 2022</p>
                        </div>
                        <div className='mt-3 w-100'>
                            <p className='ut1'>Reserves: 1,534 Tokens</p>
                            <p className='ut2'>1450 FLYFISH & 84 FLYFISH OMAKASE</p>
                            <p className='ut3'>Held back to VCR ownership to further build the brand, engage the NFT community, create partnerships and collaborations, or sell/gift to ensure the project is sustainable and scalable</p>
                        </div>
                        
                    </div>
                    </Grid>
                </Grid>
             
        </Grid>
    );
}
export default Section4;
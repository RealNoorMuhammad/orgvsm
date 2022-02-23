import React from 'react'
import {Grid,useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Button } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';

import Swal from 'sweetalert2'
import Web3 from 'web3';
import Tilt from 'react-parallax-tilt';

import ContractWrapper from '../utils/ContractWrapper'
require('dotenv').config()


const useStyles = makeStyles(theme => ({
  MianContainer:{
    display:'flex',
    flexDirection:'row',
    [theme.breakpoints.down('lg')]: {
       flexFlow:'column-reverse',
    }
  }
}))


async function getCurrentAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  return accounts[0];
}

async function handleMint() {
  try {
      if (typeof window.ethereum === 'undefined') {
          Swal.fire({
              icon: 'info',
              title: 'Metamask is not installed',
              footer: '<a target="_blank" href="https://metamask.io/">Install Metamask 🦊</a>'
          })
      } else {
          const currentAccount = await getCurrentAccount()
          if (typeof currentAccount === 'undefined') { 
              try {
                  Swal.fire({
                      icon: 'info',
                      title: 'Metamask is not connected',
                      text: 'Connect to metamask using the connect button at the top right corner'
                  })
              }
              catch (err) {
                  console.log(err)
              }
          } else {
              window.web3 = new Web3(window.ethereum);
              window.ethereum.enable();

              const localContract = require("../contracts/" + process.env.REACT_APP_CONTRACT_FILE)
              
              const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
              window.contract = await new window.web3.eth.Contract(localContract.abi, contractAddress);
              const contractWrapper = new ContractWrapper(currentAccount);
              Swal.fire({
                  icon: 'info',
                  title: "Confirm transaction on Metamask",
                  text: 'Once the transaction is done, a notification will appear. Please remain on the site and don\'t reload the page. You can see your transaction status on your Metamask extension.'
              })
              const transaction = await contractWrapper.mint(currentAccount);

              if (transaction.status === true) {
              const currentToken = await contractWrapper.totalSupply();
              Swal.fire({
                  icon: 'success',
                  title: 'Congratulations!',
                  text: 'You have minted token number: ' + currentToken.toString(),
                  footer: '<a target="_blank" href="https://testnets.opensea.io/account">View on Opensea</a>'
              })
          
              } else {
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'We had some trouble with your transaction, see your transaction from metamask to see what went wrong',
              })
              }
          }
      }
  }
  catch(err) {
      console.log(err)
  }
}

async function validateMaxValueAndTriggerAlert(mintAmount, maxAmount) {
  if (parseInt(mintAmount) > parseInt(maxAmount)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Can not mint more than ' + maxAmount.toString() + " tokens",
      footer: '<a href="">Why do I have this issue?</a>'
    })
    return false;
  }
  return true;
}

async function mintMultipleTokens(mintAmount, currentAccount) {
  window.web3 = new Web3(window.ethereum);
  window.ethereum.enable();

  const localContract = require("../contracts/" + process.env.REACT_APP_CONTRACT_FILE)
  
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
  window.contract = await new window.web3.eth.Contract(localContract.abi, contractAddress);


  const contractWrapper = new ContractWrapper(currentAccount);
  const maxAmount = await contractWrapper.getMaxMintAmountFor(currentAccount)

  if (
      validateMaxValueAndTriggerAlert(mintAmount, maxAmount)
    ) {
      Swal.fire({
          icon: 'info',
          title: "Confirm transaction on Metamask",
          text: 'Once the transaction is done, a notification will appear. Please remain on the site and don\'t reload the page. You can see your transaction status on your Metamask extension.'
      })
      const transaction = await contractWrapper.mintMany(currentAccount, parseInt(mintAmount))

      if (transaction.status === true) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'You have minted a total of: ' + mintAmount.toString() + ' tokens',
          footer: '<a target="_blank" href="https://testnets.opensea.io/account">View on Opensea</a>'
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'We had some trouble with your transaction, see your transaction from metamask to see what went wrong',
        })
      }
    }
}

async function handleMintMany() {
  try {
      if (typeof window.ethereum === 'undefined') {
          Swal.fire({
              icon: 'info',
              title: 'Metamask is not installed',
              footer: '<a target="_blank" href="https://metamask.io/">Install Metamask 🦊</a>'
          })
      } else {
          const currentAccount = await getCurrentAccount()
          if (typeof currentAccount === 'undefined') { 
              try {
                  Swal.fire({
                      icon: 'info',
                      title: 'Metamask is not connected',
                      text: 'Connect to metamask using the connect button at the top right corner'
                  })
              }
              catch (err) {
                  console.log(err)
              }
          } else {

              Swal.fire({
                  title: 'How many tokens would you like to mint?',
                  input: 'text',
                  inputAttributes: {
                    autocapitalize: 'off'
                  },
                  showCancelButton: true,
                  confirmButtonText: 'Mint',
                  showLoaderOnConfirm: true,
                  preConfirm: (mintAmount) => {
                    mintMultipleTokens(mintAmount, currentAccount)
                  },
                  allowOutsideClick: () => !Swal.isLoading()
              })
              
          }
      }
  }
  catch(err) {
      console.log(err)
  }
}

function Section1() {
    const classes = useStyles();
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const mediamScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'));
    return(
      <Grid container py={5} className='section1'>
        <Grid container p={smallScreen?2:5} className='sec1con1'>
           <h1 className='sec1Head1'>The World's First NFT Restaurant</h1> 
          <Grid container  className={classes.MianContainer}  >
            <Grid item xs={12} lg={4}  >
                <p className='sec1para'>Flyfish Club (FFC) is the world's first member's only private dining club where membership is purchased on the blockchain as a Non-Fungible-Token (NFT) and owned by the token-holder to gain access to our restaurant and various culinary, cultural and social experiences.</p>
                <div className='text-center mt-5'>
                  <Button onClick={handleMintMany} className='memberBtn py-2'>Mint One Now</Button>
                </div>
            </Grid>
            <Grid item xs={12} lg={8} >
                <iframe className='w-100' height="445" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
            </Grid>
          </Grid> 
        </Grid>
      </Grid>
    );
}
export default Section1;
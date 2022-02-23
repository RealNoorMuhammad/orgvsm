import React from 'react';
import { Navbar, Nav, Container,Button } from 'react-bootstrap';
import logoWithText from '../images/logoWithText.svg';
import logo from '../images/logo.svg';
import {Grid,useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Swal from 'sweetalert2'
import Web3 from 'web3';
require('dotenv').config()

function Header(){
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  async function getCurrentAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    return accounts[0];
  }

  async function handelConnect() {
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
                      window.web3 = new Web3(window.ethereum);
                      window.ethereum.enable();
                      const localContract = require("../contracts/" + process.env.REACT_APP_CONTRACT_FILE)
                      const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
                      window.contract = await new window.web3.eth.Contract(localContract.abi, contractAddress);
                  }
                  catch (err) {
                      console.log(err)
                  }
              } else {
                  Swal.fire({
                      icon: 'success',
                      title: 'You are already connected using Metamask',
                      text: 'Connected address: ' + currentAccount
                  })
              }
          }
      }
      catch(err) {
          console.log(err)
      }
  }
  return (
  <>
  {
    smallScreen?
     <>
      <div className='navBottomBorder'></div>
      <Navbar  variant="light"  className='NavBAR px-3'>
        <Grid container  justifyContent={'space-between'} alignItems={'center'} >
        <Navbar.Brand className='headerLogo' href="#home"><img src={logo} alt='logo' className='w-100' /></Navbar.Brand>
        <Nav className="me-auto navItem">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">How it works</Nav.Link>
          <Nav.Link href="#pricing">Become a member</Nav.Link>
          <Button className='headerBtnSM pr-0'>Sign In</Button>
        </Nav>
        </Grid>
      </Navbar>
    </>
    :
    <>
      <div className='navBottomBorder'></div>
      <Navbar  variant="light" className='NavBAR'>
        <Grid container px={3} justifyContent={'space-between'} alignItems={'center'} >
        <Navbar.Brand className='headerLogo' href="#home"><img src={logoWithText} alt='logo' className='w-100' /></Navbar.Brand>
        <Nav className="me-auto navItem">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#features">How it works</Nav.Link>
          <Nav.Link href="#pricing">Become a member</Nav.Link>
          <Button onClick={handelConnect} className='headerBtn'>Connect Wallet</Button>
        </Nav>
        </Grid>
      </Navbar>
    </>
  }
  </>
  );
}
export default Header;
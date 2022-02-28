import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import metapassvideo from "../media/metapassvideo.mp4";
import redFlower from "../media/redFlower.mp4";

import "./main.css";

import Swal from 'sweetalert2'
import Web3 from 'web3';
import ContractWrapper from '../utils/ContractWrapper'
require('dotenv').config()



function MainCard() {
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


      return (
        <Grid
          container
          style={{ width: "100%", overflow: "hidden" }}
          mt={5}
          justifyContent={"center"}
        >
          <Grid
            container
            pt={5}
            style={{ backgroundColor: "black", width: "90%", borderRadius: "14px" }}
          >
            <Grid container pt={5}>
              <Grid item xs={12} pt={5}>
                <Grid container className="cardContent" pt={3}>
                  <Grid item md={6}>
                    <Grid container justifyContent={"center"} alignItems={"start"}>
                      <video
                        style={{ transform: "scale(1.5)", marginTop: "-60px" }}
                        loop="true"
                        autoplay="autoplay"
                        className="main_nft"
                        muted
                      >
                        <source
                          className="w-100"
                          src={metapassvideo}
                          type="video/mp4"
                        />
                      </video>
                    </Grid>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container>
                      <Grid item xs={12}>
                        <h2 className="title mainHead" style={{ color: "white" }}>
                          INTO THE METAVERSE
                        </h2>
                        <p className="title mt-4 undertitle">
                          All 30,000 NFTs have now been minted.
                        </p>
                      </Grid>
                      <Grid item xs={12} mt={5} className="btnContainer">
                        <Button 
                          style={{
                            outline: "none",
                            border: "3px solid #fff",
                            color: "#fff",
                            fontWeight: "bold",
                  
                            borderRadius: "50px",
                          }}
                          onClick={handleMint} 
                          className="cardBtn my-3" 
                          variant="contained">
                          MINT NOW
                        </Button>
                        <Button
                          className="cardBtn my-3"
                          style={{
                            outline: "none",
                            border: "3px solid #fff",
                            color: "#fff",
                            fontWeight: "bold",
                  
                            borderRadius: "50px",
                          }}
                          variant="contained"
                        >
                          OPENSEA
                        </Button>
                      </Grid>
                      <Grid item className="smImageContainer" pt={10}>
                        <video width="110" loop="true" autoplay="autoplay" muted>
                          <source
                            className="w-100"
                            src={redFlower}
                            type="video/mp4"
                          />
                        </video>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container style={{ height: "100%" }} alignItems={"end"}>
                  <div class="ticker-wrapper-h">
                    <ul class="news-ticker-h">
                      <li>
                        <a href="">What is Lorem Ipsum?</a>
                      </li>
                      <li>
                        <a href="">Why do we use it?</a>
                      </li>
                      <li>
                        <a href="">Where does it come from?</a>
                      </li>
                      <li>
                        <a href="">Where can I get some?</a>
                      </li>
                      <li>
                        <a href="">Where can I get some?</a>
                      </li>
                      <li>
                        <a href="">Where can I get some?</a>
                      </li>
                      <li>
                        <a href="">Where can I get some?</a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
}
export default MainCard;
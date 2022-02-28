import Button from '@mui/material/Button';
import logo from "../images/newLogo.png";
import Swal from 'sweetalert2'
import Web3 from 'web3';
require('dotenv').config()


function Header() {

    async function getCurrentAccount() {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        return accounts[0];
      }
    
      async function handleConnect() {
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
        <div
          className="px-4 py-3"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70px",
          }}
        >
          <div style={{ width: "150px" }}>
            <img src={logo} style={{ transform: "scale(1.5)" }} className="w-100" />
          </div>
          <Button
            onClick={handleConnect}
            variant="text"
            style={{
              outline: "none",
              border: "3px solid #fff",
              color: "#fff",
              fontWeight: "bold",
    
              borderRadius: "50px",
            }}
          >
            Connect Wallet
          </Button>
        </div>
      );
}
export default Header;

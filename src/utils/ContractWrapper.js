import MerkleHelper from "./MerkleHelper"
require('dotenv').config()

class ContractWrapper {
    constructor(loggedUser) {
      this.loggedUser = loggedUser;
    }

    async setCost(newCost) {
        const transaction = await window.contract.methods
            .setCost(newCost)
            .send({ from: this.loggedUser })
        return transaction
    }

    async setBaseURI(newBaseURI) {
        const transaction = await window.contract.methods
            .setBaseURI(newBaseURI)
            .send({ from: this.loggedUser })
        return transaction
    }

    async increaseMaxSupply(newMaxSupply) {
        const maxSupply = await this.maxSupply()
        if (newMaxSupply > maxSupply) {
            const transaction = await window.contract.methods
                .increaseMaxSupply(newMaxSupply)
                .send({ from: this.loggedUser })
            return transaction
        }
    }

    async togglePause(newState) {
        const transaction = await window.contract.methods
            .pause(newState)
            .send({ from: this.loggedUser })
        return transaction
    }

    async setMaxMintAmount(newMaxMintAmount) {
        const transaction = await window.contract.methods
            .setMaxMintAmount(newMaxMintAmount)
            .send({ from: this.loggedUser })
        return transaction
    }

    async setMerkleRoot() {
        const merkleHelper = new MerkleHelper()
        const root = merkleHelper.getMerkleRoot()
        const transaction = await window.contract.methods
            .setMerkleRoot(root)
            .send({ from: this.loggedUser })
        return transaction
    }

    async mint(mintAmount) {
        const merkleHelper = new MerkleHelper()
        const proof = merkleHelper.getMerkleProof(this.loggedUser)
        const cost = await this.cost() * mintAmount
        const weiCost = window.web3.utils.toWei(cost.toString(), 'ether')
        const transaction = await window.contract.methods
            .mint(mintAmount, proof)
            .send({ from: this.loggedUser, value: weiCost })
        return transaction
    }

    async withdraw() {
        const transaction = await window.contract.methods
            .withdraw()
            .send({ from: this.loggedUser })
        return transaction
    }

    async transferOwnershipTo(address) {
        const transaction = await window.contract.methods
            .transferOwnership(address)
            .send({ from: this.loggedUser })
        return transaction
    }

    // Read contract
    async name() {
        const name = await window.contract.methods.name().call()
        return name
    }

    async balance() {
        const balance = await window.web3.eth.getBalance(process.env.REACT_APP_CONTRACT_ADDRESS)
        return window.web3.utils.fromWei(balance, 'ether')
    }

    async symbol() {
        const symbol = await window.contract.methods.symbol().call()
        return symbol
    }

    async owner() {
        const owner = await window.contract.methods.owner().call()
        return owner
    }

    async totalSupply() {
        const totalSupply = await window.contract.methods.totalSupply().call()
        return totalSupply
    }

    async maxSupply() {
        const maxSupply = await window.contract.methods.maxSupply().call()
        return maxSupply
    }

    async baseURI() {
        const baseURI = await window.contract.methods.baseURI().call()
        return baseURI
    }

    async isPaused() {
        const isPaused = await window.contract.methods.paused().call()
        return isPaused
    }

    async cost() {
        let cost = await window.contract.methods.cost().call();
        return window.web3.utils.fromWei(cost, 'ether')
    }

    async isWhitelisted(address) {
        const isWhitelisted = await window.contract.methods.whitelisted(address).call()
        return isWhitelisted
    }

    async maxMintAmount() {
        const maxMintAmount = await window.contract.methods.maxMintAmount().call()
        return maxMintAmount
    }

    // helper functions
    async getContractInfo() {
        const contractInfo = {
            name: await this.name(),
            symbol: await this.symbol(),
            owner: await this.owner(),
            maxSupply: await this.maxSupply(),
            baseURI: await this.baseURI(),
            cost: await this.cost(),
            balance: await this.balance(),
            maxMintAmount: await this.maxMintAmount(),
            totalSupply: await this.totalSupply(),
        }
        return contractInfo
    }

    async calculateTokenCost(mintAmount) {
        let tokenCost = await this.cost()
        const weiCost = window.web3.utils.toWei(tokenCost.toString(), 'ether') * mintAmount
        return weiCost
    }

    async isOwner(address) {
        const ownerAddress = await window.contract.methods.owner().call()
        return ownerAddress.toUpperCase() === address.toUpperCase()
    }
}


export default ContractWrapper
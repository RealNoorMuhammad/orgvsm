import { MerkleTree } from 'merkletreejs'
import { ethers } from "ethers"
import whitelist from "./whitelist"



class MerkleHelper {
    constructor() {
        this.whitelisted_addresses = whitelist.map(x => this.hashFunction(x))
      }
    
    hashFunction(account) {
        return Buffer.from(ethers.utils.solidityKeccak256(["address"], [account]).slice(2), "hex");
    }
    
    getMerkleTree() {
        const tree = new MerkleTree(this.whitelisted_addresses, this.hashFunction, { sortPairs: true })
        return tree.getHexRoot()
    }

    getMerkleProof(address) {
        const tree = new MerkleTree(this.whitelisted_addresses, this.hashFunction, { sortPairs: true })
        const leaf = this.hashFunction(address)
        const proof = tree.getHexProof(leaf)
        return proof

    }

    verifyLeaf(address) {
        const tree = new MerkleTree(this.whitelisted_addresses, this.hashFunction, { sortPairs: true })
        const leaf = this.hashFunction(address)
        const proof = tree.getHexProof(leaf)
        const root = tree.getHexRoot()
        return tree.verify(proof, leaf, root)
    }
}

export default MerkleHelper
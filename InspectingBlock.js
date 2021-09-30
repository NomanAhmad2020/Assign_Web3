// JavaScript source code
const Web3 = require('web3')
const web3 = new Web3("https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa"); 

// get latest block number
web3.eth.getBlockNumber().then(console.log)

// // get latest block
web3.eth.getBlock('latest').then(console.log)

// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
    for (let i = 0; i < 10; i++) {
        web3.eth.getBlock(latest - i).then(console.log)
    }
})

// get transaction from specific block
const hash = '0xfec28a5d477e3a60000d508077cdc171e16fd3e4bcda7228972da2187ab79748'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)

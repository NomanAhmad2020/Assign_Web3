// JavaScript source code
const Web3 = require('web3')
const web3 = new Web3("https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa");


web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
})

// Use sha256 Hashing function
console.log(web3.utils.sha3('Noman Ahmad'))

// Use keccak256 Hashing function (alias)
console.log(web3.utils.keccak256('Noman Ahmad'))

// Get a Random Hex
console.log(web3.utils.randomHex(32))

// Get access to the underscore JS library (npm install underscore )
var numbers = [1, 2, 3, 4, 5];

var _ = require('underscore');
_.each( numbers , function(value, key)  {
    console.log(value,key)
})
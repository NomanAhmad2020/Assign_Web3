const Web3 = require('web3')
const rpcURL = 'https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa' //  RCkP URL goes here https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa
const web3 = new Web3(rpcURL)
const address = '0x189A20DC3D44A1c20a4Cd197eA70c08bc7954D3E'                                // account address goes here
web3.eth.getBalance(address, (err, wei) => { 
                 console.log("Balance in wei ",wei);
                 balance = web3.utils.fromWei(wei, 'ether');
                  console.log("Balance in Ether",balance);
 })

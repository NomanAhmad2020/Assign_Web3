// JavaScript source code
const Web3 = require("Web3");
const Tx = require("ethereumjs-tx").Transaction;
const rpcURL = "https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa"; // Your RCP URL goes here

const web3 = new Web3(rpcURL);
                  
const account1 = "0x0be4Ff69baB77C3840Ea93233cF774681EE4D5bb";     // account no-1

const privatekey = "568296ee2ca2cc30ac295c6f077615d17c045558974f738650118e02cbab628d"; // secret key

const account1_privatekey = Buffer.from(privatekey, 'hex');
                  
const account2 = "0x5c1E770687fa95A4a1720aD612C3a5922fd624dB";

web3.eth.getTransactionCount(account1, (err, txCount) => {
    // Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    // Sign the transaction
    const tx = new Tx(txObject, {'chain': 'ropsten' });
tx.sign(account1_privatekey);

    const serializedTx = tx.serialize();
    const raw = '0x' + serializedTx.toString('hex');

    // Broadcast the transaction
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        if (!err) {
            console.log("Transaction successful.", txHash);
        } else {
            console.log('Transection Error:::', err);

        }
    });
    })
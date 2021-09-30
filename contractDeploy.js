// JavaScript source code
var Tx = require("ethereumjs-tx");
var Web3 = require("Web3");
const rpcURL = "https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa"; // Your RCP URL goes here

const web3 = new Web3(rpcURL);

const account1 = "0x0be4Ff69baB77C3840Ea93233cF774681EE4D5bb";     // account no-1

const privatekey = "568296ee2ca2cc30ac295c6f077615d17c045558974f738650118e02cbab628d"; // secret key

const byteCode = "608060405234801561001057600080fd5b5061019c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063262a9dff14610046578063967e6e6514610064578063d5dcf12714610082575b600080fd5b61004e6100b2565b60405161005b9190610125565b60405180910390f35b61006c6100b8565b6040516100799190610125565b60405180910390f35b61009c600480360381019061009791906100e9565b6100c1565b6040516100a99190610125565b60405180910390f35b60005481565b60008054905090565b6000816000819055506000549050919050565b6000813590506100e38161014f565b92915050565b6000602082840312156100ff576100fe61014a565b5b600061010d848285016100d4565b91505092915050565b61011f81610140565b82525050565b600060208201905061013a6000830184610116565b92915050565b6000819050919050565b600080fd5b61015881610140565b811461016357600080fd5b5056fea2646970667358221220fedff2cf3c672e5e1334df43102b98560a99b5fd8cb88905acb5121d89e0db8964736f6c63430008070033";


const byteCodeBuffer = Buffer.from(byteCode, "hex");

const privatekeyBuffer = Buffer.from(privatekey, "hex");

web3.eth.getTransactionCount(account1, (error, txCount) => {
    if (error) {
        console.log("error:", error)
    }
    else
    {
        const txObj = {
            nonce: web3.utils.toHex(txCount),
            data: byteCodeBuffer,
            gasLimit: web3.utils.toHex(300000),
            gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei"))
        }
    const tx = new Tx.Transaction(txObj, { chain: "ropsten", hardfork: "petersburg" });
        tx.sign(privatekeyBuffer);
        const serializedTx = tx.serialize();
        const raw = "0x" + serializedTx.toString('hex');

        web3.eth.sendSignedTransaction(raw, (error, txHash) => {
            if (error) {
                console.log('Transection Error:::', error)
            }
            else {
                console.log("Transaction successful.", txHash)

            }

        }).then(receipt => {
            console.log(receipt);
        })
    }
})
// JavaScript source code
const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa"; // Your RCP URL goes here

const contractAddress = "0x5f32886ba95b8dCE7142a4678F17F7135bEaAf31";
const web3 = new Web3(rpcURL);

const abi = [
	{
		"inputs": [],
		"name": "age",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


const contractMethodAsync = async () => {
	try {
		const contract = new web3.eth.Contract(abi, contractAddress);
		let getAge = await contract.methods.getAge().call();
		console.log("Value from function :getAge :", getAge)
	}
	catch (error) {

	}
}
contractMethodAsync()


























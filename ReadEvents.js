// JavaScript source code
const Web3 = require('web3');
const rpcURL = "https://ropsten.infura.io/v3/c6024d9d96314d7097885703b38c74aa"; // Your RCP URL goes here


const contractAddress = "0xE1d40bB15abbB09A8adA1Ea8A408A21d5196849d";

const web3 = new Web3(rpcURL);
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "SetAgeEvent",
		"type": "event"
	},
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
		let getAllEvent = await contract.getPastEvents("SetAgeEvent", { fromBlock: 0, toBlock: "latest" });


		console.log("All Events List ", getAllEvent)
	}
	catch (error) {
		console.log("Error:",error)
	}
}
contractMethodAsync()










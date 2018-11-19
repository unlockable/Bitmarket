var bettingContractByteCode = "606060405234156200001057600080fd5b6040516200205038038062002050833981016040528080518201919060200180519190602001805190910190506005838051620000529291602001906200071f565b50600682905560078180516200006d9291602001906200071f565b5060008054600160a060020a0319167302768c06da5bdebfb69e5bb1befc76cb40476fc3179055620000cd7f1100000000000000000000000000000000000000000000000000000000000000640100000000620016a1620000d682021704565b505050620007c1565b600054600160a060020a031615806200011157506000546200010f90600160a060020a0316640100000000620011ff6200030282021704565b155b156200013357620001316000640100000000620012036200030682021704565b505b60008054600160a060020a0316906338cc483190604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156200019657600080fd5b6102c65a03f11515620001a857600080fd5b5050506040518051600154600160a060020a039081169116149050620002675760008054600160a060020a0316906338cc483190604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156200022b57600080fd5b6102c65a03f115156200023d57600080fd5b505050604051805160018054600160a060020a031916600160a060020a0392909216919091179055505b600154600160a060020a031663688dcfd7826040517c010000000000000000000000000000000000000000000000000000000063ffffffff84160281527fff000000000000000000000000000000000000000000000000000000000000009091166004820152602401600060405180830381600087803b1515620002ea57600080fd5b6102c65a03f11515620002fc57600080fd5b50505050565b3b90565b600062000320640100000000620012bb6200032682021704565b92915050565b60008062000356731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed640100000000620011ff6200030282021704565b1115620003d85760008054600160a060020a031916731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed179055620003cf60408051908101604052600b81527f6574685f6d61696e6e65740000000000000000000000000000000000000000006020820152640100000000620015df6200070682021704565b50600162000703565b60006200040773c03a2615d5efaf5f49f60b7bb6583eaec212fdf1640100000000620011ff6200030282021704565b1115620004805760008054600160a060020a03191673c03a2615d5efaf5f49f60b7bb6583eaec212fdf1179055620003cf60408051908101604052600c81527f6574685f726f707374656e3300000000000000000000000000000000000000006020820152640100000000620015df6200070682021704565b6000620004af73b7a07bcf2ba2f2703b24c0691b5278999c59ac7e640100000000620011ff6200030282021704565b1115620005285760008054600160a060020a03191673b7a07bcf2ba2f2703b24c0691b5278999c59ac7e179055620003cf60408051908101604052600981527f6574685f6b6f76616e00000000000000000000000000000000000000000000006020820152640100000000620015df6200070682021704565b60006200055773146500cfd35b22e4a392fe0adc06de1a1368ed48640100000000620011ff6200030282021704565b1115620005d05760008054600160a060020a03191673146500cfd35b22e4a392fe0adc06de1a1368ed48179055620003cf60408051908101604052600b81527f6574685f72696e6b6562790000000000000000000000000000000000000000006020820152640100000000620015df6200070682021704565b6000620005ff736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475640100000000620011ff6200030282021704565b111562000635575060008054600160a060020a031916736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475179055600162000703565b6000620006647320e12a1f859b3feae5fb2a0a32c18f5a65555bbf640100000000620011ff6200030282021704565b11156200069a575060008054600160a060020a0319167320e12a1f859b3feae5fb2a0a32c18f5a65555bbf179055600162000703565b6000620006c97351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa640100000000620011ff6200030282021704565b1115620006ff575060008054600160a060020a0319167351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa179055600162000703565b5060005b90565b60028180516200071b9291602001906200071f565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200076257805160ff191683800117855562000792565b8280016001018555821562000792579182015b828111156200079257825182559160200191906001019062000775565b50620007a0929150620007a4565b5090565b6200070391905b80821115620007a05760008155600101620007ab565b61187f80620007d16000396000f3006060604052600436106100745763ffffffff60e060020a6000350416630866ebe3811461007957806327dc297e1461008657806338bbfa50146100dc5780635600f04f1461017457806399892e47146101fe578063aa8c217c14610211578063e5e0fd8d14610236578063fac8cdcd14610265575b600080fd5b610084600435610278565b005b341561009157600080fd5b610084600480359060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284375094965061049a95505050505050565b34156100e757600080fd5b610084600480359060446024803590810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496506104cc95505050505050565b341561017f57600080fd5b610187610804565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101c35780820151838201526020016101ab565b50505050905090810190601f1680156101f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020957600080fd5b6101876108a2565b341561021c57600080fd5b61022461090d565b60405190815260200160405180910390f35b341561024157600080fd5b610249610913565b604051600160a060020a03909116815260200160405180910390f35b341561027057600080fd5b610249610922565b80600114156103a657600854600160a060020a03161515610074576006543414156100745760088054600160a060020a03191633600160a060020a03908116919091179182905516158015906102d85750600954600160a060020a031615155b156103a15761039f60408051908101604052806003815260200160ea60020a621554930281525060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050610931565b505b610497565b806002141561007457600954600160a060020a03161515610074576006543414156100745760098054600160a060020a03191633600160a060020a039081169190911790915560085416158015906102d85750600954600160a060020a0316156103a15761039f60408051908101604052806003815260200160ea60020a621554930281525060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103955780601f1061036a57610100808354040283529160200191610395565b50565b6104c8828260006040518059106104ae5750595b818152601f19601f830116810160200160405290506104cc565b5050565b6104d4610ca9565b600160a060020a031633600160a060020a03161415156104f357600080fd5b61054761053260408051908101604052600481527f686f6d65000000000000000000000000000000000000000000000000000000006020820152610e4a565b61053b84610e4a565b9063ffffffff610e7216565b1561058057600854600160a060020a039081169030163180156108fc0290604051600060405180830381858888f19350505050506107ff565b6105bf61053260408051908101604052600481527f61776179000000000000000000000000000000000000000000000000000000006020820152610e4a565b156105f857600954600160a060020a039081169030163180156108fc0290604051600060405180830381858888f19350505050506107ff565b61063761053260408051908101604052600481527f64726177000000000000000000000000000000000000000000000000000000006020820152610e4a565b156106a957600854600160a060020a0390811690600230909116310480156108fc0290604051600060405180830381858888f15050600954600160a060020a0390811693506108fc925060029150301631049081150290604051600060405180830381858888f19350505050506107ff565b600154600160a060020a0330811631911663524f388960006040516020015260405160e060020a63ffffffff83160281526020600482018190526003602483015260ea60020a6215549302604483015260649091019060405180830381600087803b151561071657600080fd5b6102c65a03f1151561072757600080fd5b5050506040518051905010156107ff576107fd6201518060408051908101604052806003815260200160ea60020a621554930281525060078054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107f35780601f106107c8576101008083540402835291602001916107f3565b820191906000526020600020905b8154815290600101906020018083116107d657829003601f168201915b5050505050610e86565b505b505050565b60078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561089a5780601f1061086f5761010080835404028352916020019161089a565b820191906000526020600020905b81548152906001019060200180831161087d57829003601f168201915b505050505081565b60058054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561089a5780601f1061086f5761010080835404028352916020019161089a565b60065481565b600854600160a060020a031681565b600954600160a060020a031681565b600080548190600160a060020a0316158061095e575060005461095c90600160a060020a03166111ff565b155b1561096f5761096d6000611203565b505b60008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156109b857600080fd5b6102c65a03f115156109c957600080fd5b5050506040518051600154600160a060020a039081169116149050610a6c5760008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610a3157600080fd5b6102c65a03f11515610a4257600080fd5b505050604051805160018054600160a060020a031916600160a060020a0392909216919091179055505b600154600160a060020a031663524f3889856000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ad6578082015183820152602001610abe565b50505050905090810190601f168015610b035780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b1515610b2157600080fd5b6102c65a03f11515610b3257600080fd5b5050506040518051915050670de0b6b3a764000062030d403a0201811115610b5d5760009150610ca2565b600154600160a060020a031663adf59f99826000878782604051602001526040518563ffffffff1660e060020a028152600401808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610bd4578082015183820152602001610bbc565b50505050905090810190601f168015610c015780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015610c37578082015183820152602001610c1f565b50505050905090810190601f168015610c645780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b1515610c8457600080fd5b6125ee5a03f11515610c9557600080fd5b5050505060405180519250505b5092915050565b60008054600160a060020a03161580610cd45750600054610cd290600160a060020a03166111ff565b155b15610ce557610ce36000611203565b505b60008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610d2e57600080fd5b6102c65a03f11515610d3f57600080fd5b5050506040518051600154600160a060020a039081169116149050610de25760008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610da757600080fd5b6102c65a03f11515610db857600080fd5b505050604051805160018054600160a060020a031916600160a060020a0392909216919091179055505b600154600160a060020a031663c281d19e6000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610e2a57600080fd5b6102c65a03f11515610e3b57600080fd5b50505060405180519150505b90565b610e526115f2565b602082016040805190810160405280845181526020019190915292915050565b6000610e7e8383611213565b159392505050565b600080548190600160a060020a03161580610eb35750600054610eb190600160a060020a03166111ff565b155b15610ec457610ec26000611203565b505b60008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610f0d57600080fd5b6102c65a03f11515610f1e57600080fd5b5050506040518051600154600160a060020a039081169116149050610fc15760008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610f8657600080fd5b6102c65a03f11515610f9757600080fd5b505050604051805160018054600160a060020a031916600160a060020a0392909216919091179055505b600154600160a060020a031663524f3889856000604051602001526040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561102b578082015183820152602001611013565b50505050905090810190601f1680156110585780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b151561107657600080fd5b6102c65a03f1151561108757600080fd5b5050506040518051915050670de0b6b3a764000062030d403a02018111156110b257600091506111f7565b600154600160a060020a031663adf59f99828787876000604051602001526040518563ffffffff1660e060020a028152600401808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611129578082015183820152602001611111565b50505050905090810190601f1680156111565780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561118c578082015183820152602001611174565b50505050905090810190601f1680156111b95780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b15156111d957600080fd5b6125ee5a03f115156111ea57600080fd5b5050505060405180519250505b509392505050565b3b90565b600061120d6112bb565b92915050565b600080808080808080808a5197508a518a51101561123057895197505b8a60200151965089602001519550600094505b878510156112a5578651935085519250838314611291576000199150602088101561127b57600185896020030160080260020a031991505b50818116838216038015611291578098506112ad565b602096870196958601959490940193611243565b89518b510398505b505050505050505092915050565b6000806112db731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed6111ff565b111561134b5760008054600160a060020a031916731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed17905561134360408051908101604052600b81527f6574685f6d61696e6e657400000000000000000000000000000000000000000060208201526115df565b506001610e47565b600061136a73c03a2615d5efaf5f49f60b7bb6583eaec212fdf16111ff565b11156113d25760008054600160a060020a03191673c03a2615d5efaf5f49f60b7bb6583eaec212fdf117905561134360408051908101604052600c81527f6574685f726f707374656e33000000000000000000000000000000000000000060208201526115df565b60006113f173b7a07bcf2ba2f2703b24c0691b5278999c59ac7e6111ff565b11156114595760008054600160a060020a03191673b7a07bcf2ba2f2703b24c0691b5278999c59ac7e17905561134360408051908101604052600981527f6574685f6b6f76616e000000000000000000000000000000000000000000000060208201526115df565b600061147873146500cfd35b22e4a392fe0adc06de1a1368ed486111ff565b11156114e05760008054600160a060020a03191673146500cfd35b22e4a392fe0adc06de1a1368ed4817905561134360408051908101604052600b81527f6574685f72696e6b65627900000000000000000000000000000000000000000060208201526115df565b60006114ff736f485c8bf6fc43ea212e93bbf8ce046c7f1cb4756111ff565b1115611533575060008054600160a060020a031916736f485c8bf6fc43ea212e93bbf8ce046c7f1cb4751790556001610e47565b60006115527320e12a1f859b3feae5fb2a0a32c18f5a65555bbf6111ff565b1115611586575060008054600160a060020a0319167320e12a1f859b3feae5fb2a0a32c18f5a65555bbf1790556001610e47565b60006115a57351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa6111ff565b11156115d9575060008054600160a060020a0319167351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa1790556001610e47565b50600090565b60028180516104c8929160200190611609565b604080519081016040526000808252602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061164a57805160ff1916838001178555611677565b82800160010185558215611677579182015b8281111561167757825182559160200191906001019061165c565b50611683929150611687565b5090565b610e4791905b80821115611683576000815560010161168d565b600054600160a060020a031615806116cb57506000546116c990600160a060020a03166111ff565b155b156116dc576116da6000611203565b505b60008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561172557600080fd5b6102c65a03f1151561173657600080fd5b5050506040518051600154600160a060020a0390811691161490506117d95760008054600160a060020a0316906338cc483190604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561179e57600080fd5b6102c65a03f115156117af57600080fd5b505050604051805160018054600160a060020a031916600160a060020a0392909216919091179055505b600154600160a060020a031663688dcfd78260405160e060020a63ffffffff84160281527fff000000000000000000000000000000000000000000000000000000000000009091166004820152602401600060405180830381600087803b151561184257600080fd5b6102c65a03f115156107fd57600080fd00a165627a7a723058208877ea182e337f6794a0e056a80706a1b1113cc7069c337a43f3ad84399714410029";
var bettingContractABI = [{"constant":false,"inputs":[{"name":"team","type":"uint256"}],"name":"betOnTeam","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"},{"name":"proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"url","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"matchId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"amount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"homeBet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"awayBet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_matchId","type":"string"},{"name":"_amount","type":"uint256"},{"name":"_url","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

function getAJAXObject()
{
	var request;
	if (window.XMLHttpRequest) {
	    request = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
	    try {
	        request = new ActiveXObject("Msxml2.XMLHTTP");
	    } catch (e) {
	        try {
	            request = new ActiveXObject("Microsoft.XMLHTTP");
	        } catch (e) {}
	    }
	}

	return request;
}

document.getElementById("deploy").addEventListener("submit", function(e){
	e.preventDefault();

	var fromAddress = document.querySelector("#deploy #fromAddress").value;
	var passwd = document.querySelector("#deploy #privateKey").value;
	var matchId = document.querySelector("#deploy #matchId").value;
	var betAmount = document.querySelector("#deploy #betAmount").value;
	var privateKey;
	var url = "/getURL?matchId=" + matchId + "&fromAddress=" + fromAddress + "&passwd=" + passwd;
	var request = getAJAXObject();

	request.open("GET", url);

	request.onreadystatechange = function() {
	    if (request.readyState == 4) {
	        if (request.status == 200) {
	            if(request.responseText != "An error occured") {
	            	privateKey = "0x" + request.responseText;
	            	var queryURL = "json(https://api.crowdscores.com/v1/matches/" + matchId + "?api_key=e6b14abc4a0f4ae2b009b2a23af14801).outcome.winner";
	            	var contract = web3.eth.contract(bettingContractABI);
					var data = contract.new.getData(matchId, web3.toWei(betAmount, "ether"), queryURL, {
						data: bettingContractByteCode
					});

					var gasRequired = web3.eth.estimateGas({
					    data: "0x" + data
					});

					web3.eth.getTransactionCount(fromAddress, function(error, nonce){
						var rawTx = {
					        gasPrice: web3.toHex(web3.eth.gasPrice),
					        gasLimit: web3.toHex(gasRequired),
					        from: fromAddress,
					        nonce: web3.toHex(nonce),
					        data: "0x" + data,
					    };

					    privateKey = EthJS.Util.toBuffer(privateKey, "hex");
					    var tx = new EthJS.Tx(rawTx);
						tx.sign(privateKey);

						web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function(err, hash) {
							if (!err) {
								document.querySelector("#deploy #message").innerHTML = "Transaction Hash: " + hash + ". Transaction is mining...";

								var timer = window.setInterval(function() {
									web3.eth.getTransactionReceipt(hash, function(err, result) {
										if (result) 	{
											window.clearInterval(timer);
											document.querySelector("#deploy #message").innerHTML = "Transaction Hash: " + hash + " and contract address is: " + result.contractAddress;
										}
									})
								}, 10000)
							} else {
								document.querySelector("#deploy #message").innerHTML = err;
							}
						});
					})
	            }
	        }
	    }
	};
	request.send(null);
}, false);

document.getElementById("bet").addEventListener("submit", function(e){
	e.preventDefault();

	var fromAddress = document.querySelector("#bet #fromAddress").value;
	var passwd = document.querySelector("#bet #privateKey").value;
	var contractAddress = document.querySelector("#bet #contractAddress").value;
	var team = document.querySelector("#bet #team").value;
    var privateKey;
	var url = "/getURL?matchId=" + matchId + "&fromAddress=" + fromAddress + "&passwd=" + passwd;
	var request = getAJAXObject();

	request.open("GET", url);

	request.onreadystatechange = function() {
	    if (request.readyState == 4) {
	        if (request.status == 200) {
	            if(request.responseText != "An error occured") {
	            	privateKey = "0x" + request.responseText;

	          		if(team == "Home")	{
						team = 1;
	          		} else {
						team = 2;
					} 

					var contract = web3.eth.contract(bettingContractABI).at(contractAddress);
					var amount = contract.amount();

					var data = contract.betOnTeam.getData(team);

					var gasRequired = contract.betOnTeam.estimateGas(team, {
						from: fromAddress,
						value: amount,
						to: contractAddress
					})

					web3.eth.getTransactionCount(fromAddress, function(error, nonce){

						var rawTx = {
					        gasPrice: web3.toHex(web3.eth.gasPrice),
					        gasLimit: web3.toHex(gasRequired),
					        from: fromAddress,
					        nonce: web3.toHex(nonce),
					        data: data,
					        to: contractAddress,
					        value: web3.toHex(amount)
					    };

					    privateKey = EthJS.Util.toBuffer(privateKey, "hex");
					    var tx = new EthJS.Tx(rawTx);
						tx.sign(privateKey);

						web3.eth.sendRawTransaction("0x" + tx.serialize().toString("hex"), function(err, hash) {
							if (!err) {
								document.querySelector("#bet #message").innerHTML = "Transaction Hash: " + hash;
							} else {
								document.querySelector("#bet #message").innerHTML = err;
							}
						})
					})
				}
	        }
	    }
	};
	request.send(null);
}, false);

document.getElementById("find").addEventListener("submit", function(e){
    e.preventDefault();

    var contractAddress = document.querySelector("#find #contractAddress").value;
    var contract = web3.eth.contract(bettingContractABI).at(contractAddress);

    var matchId = contract.matchId();
    var amount = contract.amount();
    var homeAddress = contract.homeBet();
    var awayAddress = contract.awayBet();

    document.querySelector("#find #message").innerHTML =
        "Contract balance is: " + web3.fromWei(web3.eth.getBalance(contractAddress), "ether") +
        ", Match ID is: " + matchId + ", bet amount is: " + web3.fromWei(amount, "ether") + " ETH, " +
        homeAddress + " has placed bet on home team and " +
        awayAddress + " has placed bet on away team";
}, false);

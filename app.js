var express = require("express");
var app = express();

var mysql = require('mysql');

var client = mysql.createConnection({ user:'root', password:'q1w2e3r4!'});
client.connect();
client.query('use bettingAppDB');


app.get('/createCon',function(req,res){
    var user = [req.query.matchId, req.query.contractId, req.query.date, req.query.time, req.query.title, req.query.teams, 0, 0, 0];
	client.query('insert into bettingselect values(?,?,?,?,?,?,?,?,?)',user, function(error, result){ 
	
	if(!error){
		if (error) {

				console.error(err);
				throw err;

		}
		
		console.log(result);
		res.send(200,'success');
	
	} 
	else throw error;
	console.log("머가 문제래,...");
	
	}); 
	
});

app.get('/bet',function(req,res){
	q = "select * from bettingselect where matchID = '"+ req.query.matchId + "'";

	console.log(q); 

	client.query(q, function(error, result, fields){
		if(error) throw error;
		else{
			console.log(result); 
					
			uq = "update bettingselect set homeTeam="+(Number(result[0].homeTeam) + Number(req.query.homeAmount))+", awayTeam="+(Number(result[0].awayTeam) +Number(req.query.awayAmount))+" where matchID = '"+req.query.matchId +"'"
			client.query(uq, function(error, uResult, uFields){
				if(error) throw error;
				else{
					console.log("Update query 실행 \n"); 
					console.log(uResult); 
				}
			})	
			res.send(200,result);
		} 
	})
	
	 
	
	
});

app.get('/loadContract',function(req,res){
	date = req.query.date;
	q = "select * from bettingselect where Date = '"+ date + "' and confirmed = 0";
	
	console.log(q); 

	client.query(q, function(error, result, fields){
		if(error) throw error;
		else{
			console.log(result); 
			res.send(200,result);
		} 
	})
});

app.get('/loadBetRate',function(req,res){
	matchID = req.query.matchID;
	q = "select * from bettingselect where matchID = '"+ matchID + "'";
	
	console.log(q); 

	client.query(q, function(error, result, fields){
		if(error) throw error;
		else{
			console.log(result); 
			res.send(200,result);
		} 
	})
});

require('date-utils');

function intervalFunc() {
	var dt = new Date();
	var Web3 = require('web3');
	var web3 = new Web3('http://localhost:8545');

	var date = dt.toFormat('YYYY-MM-DD');
	var time = dt.toFormat('HH24:MI:SS');
	
	// select query
	sq = "select * from bettingselect where (Date <  '" + date +"' or (Date ='"+ date +"' and time < '" + time +"' )) and confirmed = 0";
	// update query
	uq = "update bettingselect set confirmed=1 where (Date <  '" + date +"' or (Date ='"+ date +"' and time < '" + time +"' )) and confirmed = 0";

	console.log(sq); 
	
	client.query(sq, function(error, sResult, sFields){
		if(error) throw error;
		else{
	//		console.log(sResult); 
			var i;
			for(i = 0; i < sResult.length; i++){
				var privateKey;
				var fromAddress = "0x17acb7a662e7409f15424ec0ebd9713fdd84bc7e";
				var bettingContractABI = [{"constant":false,"inputs":[{"name":"team","type":"uint256"}],"name":"betOnTeam","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"awayCode","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"myid","type":"bytes32"},{"name":"result","type":"string"},{"name":"proof","type":"bytes"}],"name":"__callback","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"url","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"homeBetholders","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"awaycnt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"finishBet","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"matchId","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"homecnt","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"i","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"homeCode","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"awayBetholders","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_matchId","type":"string"},{"name":"_url","type":"string"},{"name":"_homeCode","type":"string"},{"name":"_awayCode","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
				var contractAddress = sResult[i].contractID;
				
				var contract = new web3.eth.Contract(bettingContractABI, contractAddress, {from: fromAddress});
				console.log("Contract address is " + contractAddress);
				contract.methods.finishBet().send({from: fromAddress})
				.then(function(receipt){
					console.log("receipt : " +receipt);
					// receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
				});
			}
			if(sResult.length > 0){
				client.query(uq, function(error, uResult, uFields){
					if(error) throw error;
					else{
						console.log("Update query 실행 \n"); 
						console.log(uResult); 
					}
				})	
			}
		} 
	})
	
}

setInterval(intervalFunc, 300000);

//client.end();
app.set("view engine", "ejs");

app.use(express.static("public"));

app.listen(8080);

app.get("/", function(req, res) {
	
    res.sendFile(__dirname + "/public/html/index.html");
})
app.get("/test", function(req, res) {
	
    res.sendFile(__dirname + "/public/html/testsc.html");
})

var request = require("request");
var moment = require("moment");

app.get("/login", function(req, res) {
	
    res.sendFile(__dirname + "/public/html/login.html");
})

app.get("/lol", function(req, res) {
	
    res.render(__dirname + "/public/html/sports/lol.ejs");
})

app.get("/matches", function(req, res) {
    request("https://api.crowdscores.com/v1/matches?api_key=e6b14abc4a0f4ae2b009b2a23af14801", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            for (var i = 0; i < body.length; i++) {
                body[i].start = moment.unix(body[i].start / 1000).format("YYYY MMM DD hh:mm:ss");
            }

            res.render(__dirname + "/public/html/sports/matches.ejs", {
                matches: body
            });
        } else {
            res.send("An error occured");
        }
    })
});

app.get("/select_game", function(req, res) {
	var action = req.query.action;
	res.render(__dirname + "/public/html/select_game", {
                action: action
    });
})

app.get("/games", function(req, res) {
	var action = req.query.action;
	var game = req.query.game;
	res.render(__dirname + "/public/html/sports/games.ejs", {		
		action : action,
		game : game
    });
});

var PythonShell = require("python-shell");
var keyth=require('keythereum');

app.get("/getURL", function(req, res) {
    var matchId = req.query.matchId;
    var fromAddress = req.query.fromAddress;
    var passwd = req.query.passwd;

    keyth.importFromFile(fromAddress, '../../data_testnet/', function (keyObject) {
      // do stuff
        var computePrivateKey=keyth.recover(passwd,keyObject); //this takes a few seconds to finish

        var privateKey = computePrivateKey.toString('hex');

        res.send(privateKey);
    });
});
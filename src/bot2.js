const LineConnect = require('./connect');
let LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: FORKED VERSION\n\
Thanks to @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : This bot is made by @Alfathdirk @TCR_TEAM and has been forked by @GoogleX and @Arisawali2014  !\n\
***Copyright belongs to the author***");

/*
| This config is for auth/login with token
| 
| Change it to your authToken & your certificate
*/
const auth = {
 	authToken: 'Emoi8J49sC4bdaflGFDe.YQjwMLec1uFEpXYf6zs9tG.bT4EBy6hjS3DliHPNKAQbRLhb2qNpfeqm2t8/6VlJNo=',
 	certificate: '9f69cbc48b8f14062de6e7b1fc0ec60fb84431ebfb0e4292fe929d91fba2c8ad'
}

//let client =  new LineConnect();
let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	let ops;
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision, 5);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});

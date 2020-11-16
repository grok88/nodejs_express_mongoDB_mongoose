const http = require('http');
const {usersController} = require("./usersController");
// const {addUser, getUsers} = require('./repository')


//cors
let cors = (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.writeHead(200);
		res.end();
		return true;
	}
	return false
}

process.on('unhandledRejection', (reason, p) => {
	console.log(reason, p);
})

const server = http.createServer((req, res) => {
	//cors
	if (cors(req, res)) return;

	debugger
	switch (req.url) {
		case '/users':
			usersController(req, res);
			break;
		case '/tasks':
			res.write(`<h1>Tasks</h1>`);
			res.end();
			break
		default:
			res.write(`<h1>Page not found</h1>`);
			res.end();
	}
})

server.listen(3000);

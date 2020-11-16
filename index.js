// const http = require('http');
// const {usersController} = require("./usersController");
// const {addUser, getUsers} = require('./repository');

const bodyParser = require('body-parser')
const users = require('./usersController');
const express = require('express');
const app = express();


//create express app
const cors = require('cors')
app.use(cors());

// get post body
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

const port = 3000;

app.use('/users', users);



// ---------------------------    express ------------------------

app.get('/tasks', async (req, res) => {
	res.send(`<h1>Tasks</h1>`);
});

//default case -> (middleWare)
app.use((req, res) => {
	//res.send(404);// выведёт Page not  found 404
	res.send({value:404});// Json object
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
});

//cors
/*let cors = (req, res) => {
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
})*/

//nodeJS
/*const server = http.createServer((req, res) => {
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

server.listen(3000);*/

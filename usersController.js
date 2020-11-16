const {addUser, getUsers} = require('./repository');

const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});
// Important!!! '/' относительно уже от app.use('/users', users); - кот указываем в index.js -> то есть уже будет /users/

//users
router.get('/', async (req, res) => {
	let users = await getUsers();
	if (!!req.query.search){
		users = users.filter(u => u.name.includes(req.query.search));
}
	res.send(users);
});
//user
router.get('/:id', async (req, res) => {
	const userId = req.params.id;

	let users = await getUsers();
	let user = users.find(u => u.id == userId);

	if (user) {
		res.send(user);
	} else {
		res.send(404);
	}
});

router.post('/', async (req, res) => {
	const name = req.body.name;
	await addUser(name);
	res.send({success: true});
});

module.exports = router;


//old without express
// exports.usersController = async (req, res) => {
// 	if (req.method === 'POST') {
// 		let result = await addUser('Wow');
// 		res.write(JSON.stringify({success: true}));
// 		res.end();
// 	} else {
//
// 		let users = await getUsers();
// 		res.write(JSON.stringify(users));
// 		res.end();
// 	}
// }



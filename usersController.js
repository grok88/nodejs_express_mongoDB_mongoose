const {addUser, getUsers,deleteUser,getUser, updateUser} = require('./repository');

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

//get all users
router.get('/', async (req, res) => {
	let users = await getUsers(req.query.search);

// 	if (!!req.query.search){
// 		users = users.filter(u => u.name.includes(req.query.search));
// }
	res.send(users);
});
// get user by id
 router.get('/:id', async (req, res) => {
	const userId = req.params.id;

	let user = await getUser(userId);
	// let user = users.find(u => u.id == userId);

	if (user) {
		res.send(user);
	} else {
		res.send(404);
	}
});
// create user
router.post('/', async (req, res) => {
	const name = req.body.name;
	await addUser(name);
	res.send({success: true});
});

// delete user by id
router.delete('/:id', async (req, res) => {
	const userId = req.params.id;
	await  deleteUser(userId);
	res.send(204);
})
// update userName by id
router.put('/', async (req, res) => {
	const userId = req.body.id;
	const name = req.body.name;
	await  updateUser(userId, name);
	res.send({success:true});
})

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



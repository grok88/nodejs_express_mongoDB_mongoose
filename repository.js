const fs = require('fs');
// const {readJsonFromFile, writeJsonToFile} = require('./fs-utils');

//mongoose
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	name: String
});

const User = mongoose.model('MyUser', userSchema);


const getUsers = (search) => {
	return User.find({name:new RegExp(search)});

	//old
	// return readJsonFromFile('users.json');
}

const getUser = (id) => {
	return User.find({_id:id});

	//old
	// return readJsonFromFile('users.json');
}

const deleteUser = (id) => {
	return User.deleteOne({_id:id});
	//old
	// return readJsonFromFile('users.json');
}
const updateUser = (id, name) => {
	return User.update({_id:id}, {name});
	//old
	// return readJsonFromFile('users.json');
}

const addUser = async (name) => {
	//new mongoose
	const user = new User({name});
	return user.save(err => {
		if (err) return console.error(err);
	});

	//old
	// let users = await getUsers();
	// users.push({name, id: users.length + 1});
	// return writeJsonToFile('users.json', users);
}



exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.getUser = getUser;
exports.updateUser = updateUser;

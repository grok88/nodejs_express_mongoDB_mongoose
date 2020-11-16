const fs = require('fs');
const {readJsonFromFile, writeJsonToFile} = require('./fs-utils');

const getUsers = () => {
	return readJsonFromFile('users.json');
}

const addUser = async (name) => {
	let users = await getUsers();
	users.push({name, id: users.length + 1});
	return writeJsonToFile('users.json', users);
}

exports.getUsers = getUsers;
exports.addUser = addUser;

//users
const users = [
	{"id": 1, "name": "Alex"},
	{"id": 2, "name": "Gor"}
]

const getUsers = () => {
	return users;
}
const addUser = (name) => {
	users.push({name, id: 3});
}

exports.getUsers = getUsers;
exports.addUser = addUser;

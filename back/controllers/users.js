const user = [];

const addUser = ({id, name, room}) => {
  name = name.trim().toLocaleLowerCase();
  room = room.trim().toLocaleLowerCase();
  const existingUser = user.find((user) => user.room === room && user.name === name);
  if (existingUser) {
    return { error: 'Usuario existente'};
  }
  const user = {id, anme, room};
  users.push(user);
  return { user };
}


const deleteUser = (id) => {
  const index = users.findIndex((user) =>  user.id === id);
  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
  addUser,
  deleteUser,
  getUser,
  getUsersRoom
};

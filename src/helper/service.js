const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
  const response = await fetch(BASE_URL);
  const users = await response.json();
  return users.map((user) => ({
    id: user.id,
    firstName: user.name.split(' ')[0] || '',
    lastName: user.name.split(' ')[1] || '',
    email: user.email,
    department: user.company.name || '',
  }));
};

const addUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
};

const updateUser = async (user) => {
  const response = await fetch(`${BASE_URL}/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  return await response.json();
};

const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
};

export default { getUsers, addUser, updateUser, deleteUser };

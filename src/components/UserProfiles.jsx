import React, { useState } from 'react';

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');

  function addUser(e) {
    e.preventDefault();
    if (name && age && occupation) {
      const newUser = {
        id: users.length + 1,
        name,
        age,
        occupation,
      };
      setUsers([...users, newUser]);
      setName('');
      setAge('');
      setOccupation('');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 p-8">
      <div className="text-center font-bold text-3xl text-blue-600 mb-8">
        <h1>QUESTION 1</h1>
      </div>
      <form
        onSubmit={addUser}
        className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Add New User</h2>
        <div className="flex flex-col gap-4">
          <input
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            className="border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Add User
          </button>
        </div>
      </form>

      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">User Profiles</h2>
        {users.length === 0 ? (
          <p className="text-gray-500 text-center">No users available</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 bg-gray-100 rounded-lg border border-gray-300"
              >
                <strong className="text-gray-800">{user.id}.</strong>{' '}
                <span className="text-gray-700">{user.name}</span>,{' '}
                <span className="text-gray-700">{user.age} years old</span>, works
                as <span className="text-gray-700">{user.occupation}</span>.
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserProfiles;

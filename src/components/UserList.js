import React from 'react';

const UserList = ({ users, onEditUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email}, {user.age} years old)
            <button onClick={() => onEditUser(user)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
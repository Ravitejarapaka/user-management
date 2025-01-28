import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import ErrorBoundary from './ErrorBoundary';
import '../styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="app-container">
        <h1>User Management</h1>
        <UserForm
          addUser={addUser}
          updateUser={updateUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
        <UserList users={users} setSelectedUser={setSelectedUser} deleteUser={deleteUser} />
      </div>
    </ErrorBoundary>
  );
};

export default App;

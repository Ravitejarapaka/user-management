import React from 'react';
import '../styles/UserList.css';
import edit_icon from '../components/images/pencil.png'
import delete_icon from '../components/images/delete.png'

const UserList = ({ users, setSelectedUser, deleteUser }) => {
  if (users.length === 0) {
    return <p>No users available. Please add a user.</p>;
  }

  return (
    <div className="user-list">
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <button className='btn1' onClick={() => setSelectedUser(user)}><img src={edit_icon} className='edit-img'/></button>
                <button className='btn2' onClick={() => deleteUser(user.id)}><img src ={delete_icon} className='delete-img'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

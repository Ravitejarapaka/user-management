import React, { useState, useEffect } from 'react';
import '../styles/UserForm.css';
import add_img from '../components/images/add_969584.png'; // Make sure this path is correct

const UserForm = ({ addUser, updateUser, selectedUser, setSelectedUser }) => {
  const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', email: '', department: '' });

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.department) {
      if (selectedUser) {
        updateUser(formData);
      } else {
        addUser({ ...formData, id: Date.now() });
      }
      setFormData({ id: '', firstName: '', lastName: '', email: '', department: '' });
      setSelectedUser(null);
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        Required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      <button className="addBtn" type="submit">
        {!selectedUser && (
          <>
            <img src={add_img} alt="Add" className="add-icon" />
            Add User
          </>
        )}
        {selectedUser && 'Update User'}
      </button>
    </form>
  );
};

export default UserForm;

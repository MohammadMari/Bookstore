// ManageAccountPage.js

import React, { useState } from 'react';
import './ManageAccountPage.css';

const ManageAccountPage = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: {
      country: '',
      state: '',
      city: '',
      zipCode: '',
      street: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      address: {
        ...prevUserData.address,
        [name]: value,
      },
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('User data submitted:', userData);
  };

  return (
    <div className="manage-account-container">
      <h1>Manage Account</h1>
      <form onSubmit={handleFormSubmit} className="account-form">
        <div className="name-section">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />
          </label>
        </div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
        </label>
        <div className="address-section">
          <h2>Shipping Address</h2>
          <label>
            Country:
            <select
              name="country"
              value={userData.address.country}
              onChange={handleAddressChange}
            >
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              
            </select>
          </label>
          <label>
            State:
            <select
              name="state"
              value={userData.address.state}
              onChange={handleAddressChange}
            >
              <option value="">Select State</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
            </select>
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={userData.address.city}
              onChange={handleAddressChange}
              placeholder="Enter your city"
            />
          </label>
          <label>
            Zip Code:
            <input
              type="text"
              name="zipCode"
              value={userData.address.zipCode}
              onChange={handleAddressChange}
              placeholder="Enter your zip code"
            />
          </label>
          <label>
            Street Address:
            <input
              type="text"
              name="street"
              value={userData.address.street}
              onChange={handleAddressChange}
              placeholder="Enter your street address"
            />
          </label>
        </div>
        <button type="submit">Update Account</button>
      </form>
    </div>
  );
};

export default ManageAccountPage;

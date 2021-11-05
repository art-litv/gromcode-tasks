import React from 'react';

export default function UserForm({ userData: { firstName, lastName }, handleChange }) {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={lastName}
        onChange={handleChange}
      />
    </form>
  );
}

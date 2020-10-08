import React, { useState } from "react";
import "../App.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    profession: "",
    locality: "",
    noofguests: "",
    address: "",
  });

  const {
    name,
    age,
    dob,
    profession,
    locality,
    noofguests,
    address,
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        age,
        dob,
        profession,
        locality,
        noofguests,
        address,
      }),
    };
    fetch(
      "https://userrsvp.free.beeceptor.com/adduser",
      requestOptions
    ).then((response) => alert("User Registered"));
  };

  return (
    <div className='form-container'>

      <h1 className='large text-primary'>Sign Up</h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
      <div className='form-group'>
        <input
          type='text'
          name='name'
          placeholder='Enter your name'
          value={name}
          onChange={(e) => onChange(e)}
          required
        /> 
        </div>
        <div className='form-group'>
        <input
          type='number'
          name='age'
          placeholder='Enter your age'
          value={age}
          onChange={(e) => onChange(e)}
          required
        />
        </div>
        <div className='form-group'>
        <input
          type='date'
          name='dob'
          value={dob}
          placeholder='Enter DOB'
          onChange={(e) => onChange(e)}
          required
        />
        </div>
        <div className='form-group'>
        <select name='profession' required>
          <option>Choose your profession</option>
          <option>Employed</option>
          <option>Student</option>
        </select>
        </div>
        <div className='form-group'>
        <input
          type='text'
          name='locality'
          value={locality}
          placeholder='Enter location'
          onChange={(e) => onChange(e)}
          required
        />
        </div>
        <div className='form-group'>
        <input
          type='number'
          name='noofguests'
          value={noofguests}
          placeholder='Enter no. of guests'
          onChange={(e) => onChange(e)}
          required
        />
        </div>
        <div className='form-group'>
        <textarea
          type='text'
          placeholder='Enter address'
          name='address'
          rows='4'
          value={address}
          onChange={(e) => onChange(e)}
          required
        />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
    </div>
  );
};

export default UserForm;

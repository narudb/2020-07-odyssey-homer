import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContainerInput = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid grey;
  width: 50vh;
  height: 30vw;
  background-color: gray;
`;
// const info = {
//   email: 'mon@email.com',
//   password: 'monPassw0rd',
//   name: 'James',
//   lastname: 'Bond',
// };

const SignUp = () => {
  // const [formu, setFormu] = useState({});
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    const update = {
      ...newUser,
      [e.target.name]: e.target.value,
    };
    setNewUser(update);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/auth/signup', newUser)
      .then()
      .catch((err) => console.log('Erreur', err));
    console.log(newUser);
  };
  return (
    <>
      <ContainerInput>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h1>Sign Up</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email || ''}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={newUser.password || ''}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          {/* <input
            type="password"
            placeholder="Repeat password"
            name="passwordbis"
            value={newUser.name}
          /> */}
          <input
            placeholder="Firstname"
            value={newUser.firstname || ''}
            name="firstname"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={newUser.lastname || ''}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </ContainerInput>
    </>
  );
};

export default SignUp;

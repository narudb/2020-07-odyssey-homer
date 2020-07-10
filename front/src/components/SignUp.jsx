import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [formu, setFormu] = useState({});

  const updateField = (e) => {
    const update = {
      ...formu,
      [e.target.name]: e.target.value,
    };
    setFormu(update);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formu);
  };
  return (
    <>
      <ContainerInput>
        <form
          onSubmit={(evt) => {
            handleSubmit(evt);
          }}
        >
          <h1>xwcxwc</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formu.email}
            onChange={(evt) => {
              updateField(evt);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formu.password}
            onChange={(evt) => {
              updateField(evt);
            }}
          />
          <input
            type="password"
            placeholder="Repeat password"
            name="passwordbis"
            value={formu.name}
          />
          <input
            placeholder="Firstname"
            value={formu.firstname}
            name="firstname"
            onChange={(evt) => {
              updateField(evt);
            }}
          ></input>
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={formu.lastname}
            onChange={(evt) => {
              updateField(evt);
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </ContainerInput>
    </>
  );
};

export default SignUp;

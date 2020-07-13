import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const ContainerInput = styled.form`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid grey;
  border-radius: 5px;
  width: 50vh;
  height: 30vw;
  background-color: #fff;
  padding: 20px;
`;

const SignUp = () => {
  // const [formu, setFormu] = useState({});
  const [newUser, setNewUser] = useState({});
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
      <ContainerInput
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Sign Up</h1>
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextField
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
        <TextField
          placeholder="Firstname"
          value={newUser.firstname || ''}
          name="firstname"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextField
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={newUser.lastname || ''}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button
          type="submit"
          value="submit"
          onClick={handleClick}
          color="primary"
          variant="contained"
          style={{ margin: '50px' }}
          x
        >
          SUBMIT
        </Button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="User has been sign up !"
          action={
            <>
              <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </ContainerInput>
    </>
  );
};

export default SignUp;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register, login } from '../state/actions';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/core';

const LoginForm = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    department: ''
  });

  console.log(user, newUser);
  const handleLoginChanges = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };
  const handleRegisterChanges = e => {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value
    });
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    props.login(user);
    // props.history.push("/");
    setUser({
      username: '',
      password: ''
    });
  };

  const handleRegisterSubmit = e => {
    e.preventDefault();
    props.register(newUser);
    // props.history.push("/");
    setNewUser({
      username: '',
      password: '',
      department: ''
    });
  };
  return (
    <>
      <FormControl>
        <h2> Login </h2>
        <FormLabel htmlFor='username'>Username</FormLabel>
        <Input type='text' id='username' onChange={handleLoginChanges} />
        <FormLabel htmlFor='password'>Password</FormLabel>
        <Input type='password' id='password' onChange={handleLoginChanges} />
        <Flex justify='space-between'>
          <Button ml={4} ref={finalRef} onClick={handleLoginSubmit}>
            Login
          </Button>
          <Button onClick={onOpen}> Register </Button>
        </Flex>
      </FormControl>

      {/* modal register form */}
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Register Your Account </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> Username </FormLabel>
              <Input
                type='text'
                id='username'
                onChange={handleRegisterChanges}
              />
              <FormLabel> Password </FormLabel>
              <Input
                type='password'
                id='password'
                onChange={handleRegisterChanges}
              />
              <FormLabel> Department </FormLabel>
              <Input
                type='text'
                id='department'
                onChange={handleRegisterChanges}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variantColor='blue' mr={3} onClick={handleRegisterSubmit}>
              Register
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(mapStateToProps, { register, login })(LoginForm);

import React from 'react';
import { Flex } from '@chakra-ui/core';
import LoginForm from './LoginForm';

const LandingPage = () => {
  return (
    <div>
      <Flex className='header'>
        <h1> Dad Jokes </h1>
      </Flex>
      <Flex justify='center' className='loginForm'>
        <LoginForm />
      </Flex>
    </div>
  );
};

export default LandingPage;

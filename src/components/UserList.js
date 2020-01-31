import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Flex } from '@chakra-ui/core';
import UserCard from './UserCard';

const UserList = props => {
  return (
    <Flex justify='space-around'>
      {props.data.map(user => (
        <UserCard key={user.id} data={user} />
      ))}
    </Flex>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    data: state.data
  };
};

export default connect(mapStateToProps, {})(UserList);

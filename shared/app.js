import React from 'react';
import styled from 'styled-components';
import UserList from 'containers/user-list';
import User from 'containers/user';
import PetList from 'containers/pet-list';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  > * {
    flex: 1;
    overflow: auto;
  }
`;

export default () => (
  <Wrapper>
    <UserList />
    <User />
    <PetList />
  </Wrapper>
);

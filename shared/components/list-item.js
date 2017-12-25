import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items:center;
  background: #ecf0f1;
  margin: 10px;
`;

const Thumb = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export default ({
  image,
  name,
  onClick,
}) => (
  <ItemWrapper onClick={onClick}>
    <Thumb src={image} />
    {name}
  </ItemWrapper>
);

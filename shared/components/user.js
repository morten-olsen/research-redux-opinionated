import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.div`
  font-size: 26px;
`;

const Button = styled.button`
  font-size: 26px;
  border: none;
  color: #fff;
  background: #8e44ad;
  padding: 10px;
  margin: 10px 0;
`;

export default ({
  item,
  searchPets,
}) => item ? (
  <Wrapper>
    <Top>
      <Image src={item.image} />
      <Name>{item.name}</Name>
    </Top>
    <div>
      {item.address}
    </div>
    <Button onClick={searchPets}>Show Pets</Button>
  </Wrapper>
) : null;

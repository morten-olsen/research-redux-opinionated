import React from 'react';
import styled from 'styled-components';
import ListItem from './list-item';

const Button = styled.button`
  display: block;
  background: #8e44ad;
  border: none;
  width: auto;
  padding: 10px;
  margin: 10px;
  color: #fff;
`

export default ({
  items,
  select,
  more,
}) => items ? (
  <div>
    {items.map(item => (
      <ListItem
        key={item.id}
        name={item.name}
        image={item.image}
        onClick={() => select(item.id)}
      />
    ))}
  {more && <Button onClick={more}>More</Button>}
  </div>
) : null;

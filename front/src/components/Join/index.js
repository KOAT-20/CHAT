import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container, ContainerInner, Title, Input, Button
} from './join.js';

export default function Join () {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>
      <ContainerInner>
        <Title>Join</Title>
        <Input type='text' placeholder='Name...' onChange={(event) => setName(event.target.value)} />
        <Input type='text' placeholder='Room...' onChange={(event) => setRoom(event.target.value)} />
        <Link
          onClick={event => (!name || !room) ? event.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
          >
          <Button type='submit'>Sign In</Button>
        </Link>
      </ContainerInner>
    </Container>
  );
}

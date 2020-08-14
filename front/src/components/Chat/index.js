import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
/* Component */
import BarApp from '../BarApp';
import InputMessage from '../Input';
import Messages from '../Messages';
import TextContainer from '../TextContainer';
/* Style */
import {
  Row, Col, ContainerChatOuter, ContainerChatInner
} from './chat.js';

let socket;

export default function Chat ({location}) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit('join', { name, room } , () => {

    });
    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
    socket.on('roomData', ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  console.log(message, messages);

  return (
    <Row>
      <Col size={4}>
        listado
      </Col>
      <Col size={8}>
        <ContainerChatOuter>
          <ContainerChatInner>
            <BarApp room={room} />
            <Messages messages={messages} name={name} />
            <InputMessage message={message} setMessage={setMessage} sendMessage={sendMessage} />
            {/* <TextContainer users={users}/> */}
          </ContainerChatInner>
        </ContainerChatOuter>
      </Col>
    </Row>
  );
}

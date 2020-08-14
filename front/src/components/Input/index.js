import React from 'react';
import { Form, Input, Button } from './input.js';

export default function InputMessage ({ setMessage, sendMessage, message }) {
  return (
    <Form>
      <Input
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <Button onClick={e => sendMessage(e)}>Send</Button>
    </Form>
  );
}

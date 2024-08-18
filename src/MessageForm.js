import React, { useState, useEffect} from 'react';
import './MessageForm.css';

function MessageForm() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  
  useEffect(() => {
    if (window.performance) {
      if (performance.getEntriesByType('navigation')[0].type === 'reload') {
        window.location.href = '/BrunoBirthday';
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="message-form">
      <h2>Leave a Message</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write your message here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="message-list">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default MessageForm;

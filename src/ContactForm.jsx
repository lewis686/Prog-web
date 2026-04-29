import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); 
    
    if (name === '' || email === '' || message === '') {
      setFeedback('Completeaza toate campurile!');
    } else {
      setFeedback('Multumim, ' + name + '!');
    
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
      <h3>Contact</h3>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Nume" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        /><br/>
        <input 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br/>
        <textarea 
          placeholder="Mesaj" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        /><br/>
        <button type="submit">Trimite</button>
      </form>
      {feedback && <p><strong>{feedback}</strong></p>}
    </div>
  );
}

export default ContactForm;
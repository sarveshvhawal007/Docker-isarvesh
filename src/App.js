import "./App.css";
import Confetti from "./Confetti";
import React, { useState } from 'react';

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {

  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
    setText('');

    // If you want to send the text to a server, you can use fetch here
    // For example:
    fetch('https://api.example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  };
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>Congratulations!!!</h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          You ran your first container.
        </p>
        <div>
          <a
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            class="fa-brands fa-x-twitter"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink
            }
            class="fa-brands fa-linkedin"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://reddit.com/submit?title=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            class="fa-brands fa-reddit"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
        <div>
          <h1>Text Submission App</h1>
          <form onSubmit={handleSubmit}>
          <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here"
              rows="4"
              cols="50"
          />
            <br />
            <button type="submit">Submit</button>
          </form>
          {submittedText && (
              <div>
                <h2>Submitted Text:</h2>
                <p>{submittedText}</p>
              </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import getJoke from '../api/jokeData';

function Home() {
  const [btnText, setBtnText] = useState('GET A JOKE');

  const [joke, setJoke] = useState({});

  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setButton('GET PUNCHLINE');
    });
  };

  return (
    <>
      <h1>Joke Generator</h1>
      <p>{joke.setup}</p>
      {btnText !== 'GET PUNCHLINE' ? joke.punchline : ''}
      {btnText === 'GET A JOKE' || btnText === 'GET A NEW JOKE' ? (
        <button
          className="btn btn-success"
          type="button"
          onClick={getAJoke}
        >
          {btnText}
        </button>
      ) : (
        <button
          onClick={() => setButton('GET A NEW JOKE')}
          className="btn btn-success"
          type="button"
        >
          {btnText}
        </button>

      )}
    </>
  );
}

export default Home;

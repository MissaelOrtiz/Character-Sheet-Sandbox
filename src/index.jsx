import React from 'react';
import { render } from 'react-dom';
import App from './App';
import CharacterProvider from './context/CharacterProvider';

render(
  <React.StrictMode>
    <CharacterProvider>
      <App />
    </CharacterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

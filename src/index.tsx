import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App} from './App';

createServer({
  routes() {
    this.namespace = 'api';

    // Quando houver um get em /transactions, retornar o objeto abaixo
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Freelance de website',
          amount: 400,
          type: 'deposit',
        }
      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { Model, createServer } from 'miragejs';
import { App} from './App';

createServer({
  // Criando uma tabela no banco de dados
  models: {
    transaction: Model,
  },

  // O schema é o banco de dados
  routes() {
    this.namespace = 'api';

    // Quando houver um get em /transactions, retornar o objeto abaixo
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);

    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


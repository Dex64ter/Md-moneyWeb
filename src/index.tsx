import React from 'react';
import ReactDOM from 'react-dom';
import { Model, createServer } from 'miragejs';
import { App} from './App';

createServer({
  // Criando uma tabela no banco de dados
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2023-02-21 10:00:00'),
        },
        {
          id: 2,
          title: 'Conta de internet',
          type: 'withdraw',
          category: 'Casa',
          amount: 100,
          createAt: new Date('2023-05-23 08:00:00'),
        },
      ],
    })
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


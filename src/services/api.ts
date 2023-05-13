import axios from 'axios';
// Axios é um cliente HTTP baseado em Promises para fazer requisições.
// o próprio axios pode interceptar requisições e respostas antes de serem tratadas para autenticação por exemplo.
// além de interceptar erros de requisições e respostas.
export const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})
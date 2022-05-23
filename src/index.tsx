import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model} from "miragejs";
import App from './App';

createServer({

  models: {
    transation: Model
  },

  seeds(server) {
    server.db.loadData({
      transations: [
        {
          id: 1,
          title: 'Frelance de Websites',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 5000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 2100,
          createdAt: new Date('2021-02-14 11:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transations', () => {
      return this.schema.all('transation');
    })

    this.post('/transations', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transation', data);
    })


  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
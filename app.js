const express = require('express');
const routes = require('./routes');
const db = require('./config/db'); 
const cors = require('cors');

const app = express();

app.use(cors({origin:'*'}))
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');
    iniciarServidor();
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

function iniciarServidor() {
  app.use('/api', routes);

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
  });
}

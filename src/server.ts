import express from 'express' // Com isso não utilizar o required
import routes from './routes' // Pega a rota de routes/index.ts

//Controla e acessar rotas, middleware e recursos
const app = express();

//Chama a rota e a executa
app.use(routes);

//método p/ configurar a porta de acesso da app, https://localhost:3333
app.listen(3333, () => {
	console.log('Server started on port 3333!');
});
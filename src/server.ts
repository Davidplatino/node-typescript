import express from 'express' // Com isso não utilizar o required

//Controla e acessar rotas, middleware e recursos
const app = express();

app.get('/', (request, response) => {
	return response.json({message: 'Olá Dev'});
});

//método p/ configurar a porta de acesso da app, https://localhost:3333
app.listen(3333, () => {
	console.log('Server started on port 3333!');
});
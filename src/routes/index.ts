import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
	return response.json({message: 'Olá Dev'});
});

export default routes; // Exportando as respostas as requisições feitas p/ o(s)
                       // arquivos que chamarem alguma rota.
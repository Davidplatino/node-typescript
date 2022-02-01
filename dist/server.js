"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Com isso não utilizar o required
//Controla e acessar rotas, middleware e recursos
const app = (0, express_1.default)();
app.get('/', (request, response) => {
    return response.json({ message: 'Olá Dev' });
});
//método p/ configurar a porta de acesso da app, https://localhost:3333
app.listen(3333, () => {
    console.log('Server started on port 3333!');
});

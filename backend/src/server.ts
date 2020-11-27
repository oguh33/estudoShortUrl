import app from './app';
import database from './database';

database.sync(); // o parametro {force: true} usar somente em dev para forcar a criacao de tabelas
console.log('database rodando na 3306');

app.listen(3001);
console.log('aqui rodando localhost na 3001');
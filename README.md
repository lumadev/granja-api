# Git
É possível rodar o projeto nas branchs dev ou master.

# Sobre o Projeto
Projeto feito com express/typescript e Node.js para listar os animais de uma granja. O banco de dados utilizado foi PostgreSQL.

# Como rodar o Projeto
- Criar uma database "granja" pgAdmin;
- Execute os sqls que se encontram em pasta sql, nessa ordem: sql/gera_database.sql e sql/popula_dados.sql;
- Run ``yarn dev`` no console e o projeto irá rodar em: http://localhost:3000/;
- Uma requisição teste no browser para verificar se Api está funcionando pode ser feita dessa forma:
http://localhost:3000/animal?limit=10&page=1

# Rodar os testes
- Rodar ``npm test`` para execução dos testes de integração dos métodos http da Api;
- Ps. A Api não pode estar sendo executada para rodar os testes.
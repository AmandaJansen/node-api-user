# node-api-user
Este é o código-fonte de uma API simples desenvolvida em Node.js utilizando o framework Express e o banco de dados MongoDB. A API oferece funcionalidades básicas para gerenciamento de pessoas, permitindo a criação, leitura, atualização e exclusão de registros.

## Instalação de Dependências
Antes de iniciar a aplicação, instale as dependências necessárias executando o seguinte comando:

```shell script
npm install
```
Executando a Aplicação
Após a instalação das dependências, você pode iniciar a aplicação usando o seguinte comando:

```shell script
npm start
```
A API estará disponível em http://localhost:3000/.

## Rotas Disponíveis
Rota Principal

GET /: Retorna uma mensagem indicando que o servidor Express está ativo. 

Rota de Pessoas

GET /person: Retorna todos os registros de pessoas.

GET /person/:id: Retorna os detalhes de uma pessoa específica.

POST /person: Cria um novo registro de pessoa.

PATCH /person/:id: Atualiza os dados de uma pessoa existente.

DELETE /person/:id: Exclui o registro de uma pessoa.

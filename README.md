# Desafio React Pokemon - Gotta Fetch Them All!

Usando como referência nossos estudos anteriores, neste projeto vamos criar uma aplicação que nos permite selecionar um time de 6 pokemons, fazendo as operações de CRUD (create, read, update e delete). Para trazer a lista de pokemons existentes, vamos utilizar a [PokeAPI](https://pokeapi.co)
  
Para isso, temos a dependência de desenvolvimento já instalada (json-server), e para rodar, basta o comando `npm run api`, e a api estará funcionando no endereço http://localhost:3333):

## Configuração inicial

- [x] Arquivos para o json-server: `/api/db.json` , script para rodar api: `npm run api`
- [x] Estrutura inicial para rotas, com as páginas `/list` e `/detail/:id` (caso queiram modificar e melhorar, fiquem a vontade, apenas uma sugestão inicial)

## Regras

- [x] Além das 2 páginas, pode criar outras páginas, componentes e serviços
- [x] Utilizar componentes do [Material UI](https://mui.com/pt/) e componentes próprios

## Features

- [ ] Página `/list` mostrar os meus pokemons (json-server) e dar a opção de adicionar pokemon, caso não tenham 6 cadastrados (máximo)
- [ ] Ao clicar em adicionar pokemon, ou pokemon já existente na lista, ir para a página `/detail/:id`
- [x] Para editar ou adicionar, apresentar um Grid, e preencher com os dados vindos da PokeAPI. Ex: `https://pokeapi.co/api/v2/pokemon?limit=151` para trazer os nomes dos primeiros 151 pokemons.
- [x] Ao selecionar um pokemon no select, consultar a PokeAPI com o id (Ex: `https://pokeapi.co/api/v2/pokemon/25` para Pikachu)
- [x] mostrar as informações em um card que preferir (nome, foto, tipo etc.)
- [ ] Ao confirmar, caso esteja adicionando um novo, salvar (POST) ou atualizar (PUT) na api local (json-server)

## Extra Features
- [ ] Não permitir quando for adicionar um novo pokemon, que ele seja do mesmo tipo que você já tenha na sua lista
- [ ] Utilizar qualquer melhoria visual (html e css), para criar uma experiência incrível (usem a criatividade)!

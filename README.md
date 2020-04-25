<p align="center">
  <img src="./web/src/assets/logo.svg" alt="Be The Hero" />
</p>
<h3 align="center">
  Aplicação para ONG's cadastrarem casos e pessoas comuns poderem contribuir com doações!
</h3>

<br />
  
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/agustinhopneto/gostack-desafio02?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>
  
## Visão Geral

**Be The Hero** é uma aplicação feita durante a **Semana Omnistack 11.0** realizada pela [**Rocketseat**](https://rocketseat.com.br/) com o intuito de ensinar um pouco sobre a stack de desenvolvimento [**Node.js**](https://nodejs.org/pt-br/) + [**React**](https://pt-br.reactjs.org/) + [**React Native**](https://reactnative.dev/).

O intuito da aplicação é ser simples mas aplicar vários conceitos e tecnologias do ecossistema dessa stack.

O back-end é desenvolvido no modelo de API Rest utilizando o Node.js, e é consumido pelo cliente web feito com React e pelo cliente mobile (Android e iOS) feito com React Native.

O cliente web é utilizado pela ONG, onde a mesma se cadastra, faz o logon na aplicação e cadastra os casos,  para serem visualizados pelos usuários comuns.

Já o cliente mobile, consegue visualizar todas os casos abertos por todas as ONG's, visualizar os detalhes e entrar em contato por E-mail ou WhatsApp com a ONG em questão para ser o herói do caso.

### Prints

<img src="https://i.imgur.com/HoKtMI3.png" width="640" heitgh="360" />

<img src="https://i.imgur.com/8D1bdzx.png" width="640" heitgh="360" />

<img src="https://i.imgur.com/z8V1dVY.png" width="640" heitgh="360" />

<img src="https://i.imgur.com/hVyY3A4.png" width="640" heitgh="360" />

<div style="display:flex;flex-direction:row;justify-content:center">
    <img src="https://i.imgur.com/KMmVDdC.png" width="216" heitgh="444" />
    <img src="https://i.imgur.com/5YPPSIO.png" width="216" heitgh="444" style="margin: 0 30px 0 30px;" />
    <img src="https://i.imgur.com/ypUCnT3.png" width="216" heitgh="444" />
</div>

## Instalação

### Server
Para rodar a aplicação, é necessário ter o [**Node.js**](https://nodejs.org) instalado na sua máquina.

Abra seu terminal, entre na pasta **server** e digite:
`npm install`

Espere a instalação terminar e digite:
`npm start`

### Web

Abra uma nova instância do terminal, entre na pasta **web** e digite:
`npm install`

Espere a instalação terminar e digite:
`npm start`

### Mobile (iOS e Android)

Você precisa ter instalado o app [**Expo**](https://expo.io/) em seu dispositivo móvel para prosseguir.

Abra uma nova instância do terminal, entre na pasta **mobile** e digite:
`npm install`

Espere a instalação. Vá até o arquivo `./mobile/src/services/api.js` e altere o IP colocando o de sua máquina.

Após isso execute:
`npm start`

E siga as instruções no navegador para rodar o app em seu dispositivo.

## Licença
MIT © [Agustinho Neto](https://github.com/agustinhopneto)
---
Obrigado pela visita! :heart:

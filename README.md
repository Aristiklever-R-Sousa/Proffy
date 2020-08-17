<h1 align="center">Proffy</h1>

## Sobre 📝
<p>O Proffy tem o intuito de conectar alunos aos seus professores!</p>
<p>
	Com um layault acessível, ele permite que professores se cadastrem rapidamente e que seus alunos não tenha dificuldades em os achar!
</p>

## Tecnologias 💻
 - O server-side JavaScript: [Node.js](https://nodejs.org/en/);
 - O framework front-side baseado em componentes: [React](https://pt-br.reactjs.org/);
 - O gerenciador de pacotes JavaScript: [Yarn](https://yarnpkg.com/);
 - Uma ferramenta que vem sendo muito utilizada no desenvolvimento mobile: [Expo](https://expo.io/).

## Dependências
 - <strong>Antes de iniciar, algumas observações</strong>: algumas vezes, depois de adicionadas as dependências do projeto, quando chamada para uso, o recurso em questão poderá retornar um erro. Isso porque utilizamos typescript no projeto completo, então algumas dependências não vem convertidas para esse tipo por padrão, então, temos que fazer isso manualmente. 
	- Ao passar o cursor por cima do erro, ele mostrará a comando que resolve aquele erro, exemplo: `npm install @types/nome-da-depedência -D` ou, se preferir, `yarn add @types/nome-da-depedência -D`
	- A flag '-D' serve para indicar que esses arquivos de tipagem são apenas para desenvolvimento, que não vão para produção.
 - Server-side:
	- Para lidar com as rotas no seu projeto, faremos uso da biblioteca express.
		- Para adicioná-lo, digite: `yarn add express`
	- No projeto, utilizamos como db o sqlite ([saiba mais](https://www.sqlite.org/index.html)) e para lidar com os comandos sql, o knex ([saiba mais](http://knexjs.org/#Installation-node)).
		- Para adicioná-los ao seu projeto: `yarn add knex sqlite3`
	- Como, por default, a api node só pode ser acessada por outra aplicação se estiver no mesmo endereço, vamos utilizar o cors para solucionar isso.
		- Para adicioná-lo, digite: `yarn add cors`
 - Client-side:
	- Para conectar de fato o front com a api node, utilizamos o axios ([saiba mais](https://www.npmjs.com/package/axios)), que é uma espécie de promisse baseada nas requisições HTTP.
		- Para adicioná-lo, digite: `yarn add axios`
 - Mobile:
	- As fontes utilizadas no projeto mobile são as mesmas que a do web, porém, precisamos adicioná-las via expo no projeto mobile.
		- Para adicioná-las, digite: `expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins`
	- Para lidar com rotas no react-native, utilizamos uma biblioteca chamada react navigation ([saiba mais](https://reactnavigation.org/docs/getting-started)).
		- Para adicioná-lo, digite: `yarn add @react-navigation/native`
		- Como estamos utilizando o expo, devemos adicionar as seguintes dependências: `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`
	- Para uma navegação entre telas (indo e voltando com botões em cada tela, ou seja, em "pilha") utilizamos a biblioteca stack ([saiba mais](https://reactnavigation.org/docs/hello-react-navigation)).
		- Para adicioná-lo, digite: `yarn add @react-navigation/stack`
	- Para uma navegação entre abas, uyilizamos o bottom-tabs ([saiba mais](https://reactnavigation.org/docs/tab-based-navigation))
		- Para adicioná-lo, digite: `yarn add @react-navigation/bottom-tabs`
	- Para conectar a nossa aplicação mobile com o server, também vamos precisar do axios e o comando é o mesmo utilizado na web
	- Para salvar os Proffys favoritos, não utilizamos o database em si, utilizamos o armazenamento local, o async-storage foi usado para manipular esse armazenamento interno
		- Para adicioná-lo, digite: `expo install @react-native-community/async-storage`

<h2> ♻️ Como faço para contribuir? </h2>

- Faça um Fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`
<br/>

---

<p align="center">Feito com muito ❤ por mim, Aristiklever Sousa😊.</p>

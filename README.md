# React basic
Trata-se de um aplicativo simples para compreesão do uso do React

## Requisitos mínimos
- nodejs lts
- Visual studio code ou editor de sua preferência.
- Dica de extensões: Code Runner, Dracula oficial theme, Material icon theme, Emmet

# Criando o primeiro projeto
```javascript
npx create-react-app nome-projeto
```

# Criando o primeiro componente
Criando o primeiro compontente, exportando e importando.

```javascript
// src/componentes/Comentario.js
import React from 'react';

const Comentario = () => (
  <div>
    Meu primeiro componente
  </div>
);

export default Comentario;

// src/App.js
import './App.css';
import Comentario from './componentes/Comentario';
function App() {
  return (
    <div className="App">
      <div>Meu primeiro projeto</div>
      <Comentario />
    </div>
  );
}

export default App;
```

# Propriedade
Como passar propriedades para os componentes
```javascript
// src/App.js
// ... código omitido
// as propriedades devem ser passadas como se fossem atributos de uma tag
 <Comentario nome="João Fernandez" email="joao@fernandez.com" data={new Date(2022, 1, 5)}>
    Olá, como você está?
  </Comentario>
// ... código omitido

// src/componentes/Comentario.js
// ... código omitido`
// utilizamos a palavra props para recebermos essas propriedades por parâmentro em nosso componente Comentario.js
// um detalhe para pegar o conteúdo da mensagem que foi passado dentro da tag <Comentario> utilizamos a propriedade
// children
const Comentario = (props) => (
  <div className="Comentario">
    <div>{props.nome}</div>
    <div>{props.email}</div>
    <div>{props.children}</div>
    <div>{props.data.toString()}</div>
  </div>
);
// ... código omitido

```
# State | Estado
State permite que nosso componente seja inteligente. Os componentes que contém state são chamados de _Statefull_ e os componentes que contém apenas propriedades são chamados de _Stateless_

```javascript
// código omitido
// primeiro passo transformamos nossa função em classe
class App extends Component {
// assim criamos o state, que é um objeto
  state = {
    comentario: [
      {
        nome: "Maria",
        email: 'maria@maria.com',
        data: new Date(2022, 1, 5),
        mensagem: 'Olá, como você está?'
      },
      {
        nome: "João Fernandez",
        email: "joao@fernandez.com",
        data: new Date(2022, 1, 5),
        mensagem: 'Yep, sim...'
      }
    ]
  }
// incluí o rende para renderizar o conteúdo
  render(){
    return (
      <div className="App">
        <div>Meu primeiro projeto</div>
        {
          this.state.comentario.map(comentario => {
            return <Comentario nome={comentario.nome} email={comentario.email} data={comentario.data}>
              {comentario.mensagem}
            </Comentario>
          })
        }
      </div>
    );
  }
}
  // código omitido
```

# Manipulação de estado
Para manipular um state | estado podemos utilizamos a função _setState()_ do _Component_.

```javascript
// vamos incluir um novo comentário
// Primeiro vamos inserir o botão
render(){
    return (
      <div className="App">
        <div>Meu primeiro projeto</div>
        {/* ...codigo acima omitido. Ah, isso é um comentário javascript dentro do render */}
        <button onClick={this.newComment}>novo comentário</button>
      </div>
    );
  }
}

// agora criaremos uma função
newComment () => {
  let comment = {
    nome: "Fernandez Sousa",
    email: "fernandez@fernandez.com",
    data: new Date(),
    mensagem: 'Novo comentário'
  }

  // utilizando a função setState, junto com spreed operator
  this.setState({comentario: [...this.state.comentario, comment]})
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

import { Component } from 'react';
import './App.css';
import Comentario 
 from './componentes/Comentario';
class App extends Component {

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

export default App;

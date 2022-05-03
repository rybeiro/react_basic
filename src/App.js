import { Component } from 'react';
import './App.css';
import Comentario 
 from './componentes/Comentario';
class App extends Component {

  state = {
    comentario: [
      {
        id: Math.floor(Math.random() * 10000),
        nome: "Maria",
        email: 'maria@maria.com',
        data: new Date(2022, 1, 5),
        mensagem: 'Olá, como você está?'
      },
      {
        id: Math.floor(Math.random() * 10000),
        nome: "João Fernandez",
        email: "joao@fernandez.com",
        data: new Date(2022, 1, 5),
        mensagem: 'Yep, sim...'
      }
    ]
  }

  adicionarComentario = () => {
    let comment = {
      id: Math.floor(Math.random() * 10000),
      nome: "Jenifer Sousa",
      email: "jenifer@sousa.com",
      data: new Date(),
      mensagem: "Simples assim"
    }

    this.setState({comentario: [...this.state.comentario, comment]})
  }

  render(){
    return (
      <div className="App">
        <div>Meu primeiro projeto</div>
        {
          this.state.comentario.map(comentario => {
            return <Comentario key={comentario.id} nome={comentario.nome} email={comentario.email} data={comentario.data}>
              {comentario.mensagem}
            </Comentario>
          })
        }
        <button onClick={this.adicionarComentario}>novo comentário</button>
      </div>
    );
  }
}

export default App;

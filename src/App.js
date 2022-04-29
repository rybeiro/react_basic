import './App.css';
import Comentario 
 from './componentes/Comentario';
function App() {
  return (
    <div className="App">
      <div>Meu primeiro projeto</div>
      <Comentario nome="João Fernandez" email="joao@fernandez.com" data={new Date(2022, 1, 5)}>
        Olá, como você está?
      </Comentario>
    </div>
  );
}

export default App;

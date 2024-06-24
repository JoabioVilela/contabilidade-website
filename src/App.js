import './App.css';
import Carrossel from './components/Carrossel';
import Contato from './components/Contato';
import Menu from './components/Menu';
import Servicos from './componentes/Servicos';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      
      <Carrossel />

      <Servicos />

      <Contato />

    </div>
  );
}

export default App;

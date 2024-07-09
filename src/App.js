import './App.css';
import Carrossel from './components/Carrossel';
import Contato from './components/Contato';
import Menu from './components/Menu';
import Servicos from './components/Servicos';
import Missao from './components/Missao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      
      <Carrossel />

      <Missao />

      <Servicos />

      <Contato />

      <Footer />

    </div>
  );
}

export default App;

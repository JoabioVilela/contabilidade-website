import './App.css';
import Carrossel from './components/Carrossel';
import Contato from './components/Contato';
import Menu from './components/Menu';
import Servicos from './components/Servicos';
import Missao from './components/Missao';
import ExchangeRateCard from './components/ExchangeRateCard';

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
      </header>
      
      <Carrossel />

      <ExchangeRateCard />

      <Missao />

      <Servicos />

      <Contato />

    </div>
  );
}

export default App;
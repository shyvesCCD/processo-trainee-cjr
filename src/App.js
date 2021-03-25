import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="container-header">
        <header>
          <p id="globo">globo.com</p>
          <p id="g1">g1</p>
          <p id="ge">ge</p>
          <p id="gshow">gshow</p>
          <p id="videos">vídeos</p>
        </header>
      </div>
      <div className="container-title">
        <p>MENU</p>
        <h1>G1</h1>
        <p>Buscar</p>
      </div>
      <div className="container">
        <main>
          <div className="container-card1">
            <Card
              tag="Economia"
              title="Guedes diz que governo deve antecipar benefícios de aposentados"
              description="Ministro falou ao Senado que pagamentos serão feitos após aprovação do Orçamento pelo Congresso."
            ></Card>
          </div>
          <div className="container-right">
            <div container="container-card2">
              <Card
                tag="Congestionamento naval"
                title="Navegação no Canal de Suez segue bloqueada por navio encalhado"
              ></Card>
            </div>
            <div className="container-card3">
              <Card
                tag="🐏"
                title="Família adota carneiro de estimação no interior de SP: 'Carinho muito grande'"
              ></Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

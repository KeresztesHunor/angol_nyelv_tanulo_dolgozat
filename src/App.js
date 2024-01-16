import './App.css';
import Kiegeszit from './komponensek/Kiegeszit';
import Model from './model/Model';

function App()
{
  const MODEL = new Model();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Angol nyelv tanító dolgozat</h1>
      </header>
      <Kiegeszit model={MODEL}/>
    </div>
  );
}

export default App;

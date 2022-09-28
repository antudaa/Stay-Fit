import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLightbulb } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1>Antu</h1>
      <FontAwesomeIcon icon = {faDumbbell}></FontAwesomeIcon>
    </div>
  );
}

export default App;

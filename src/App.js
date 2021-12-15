import ReactDOM from 'react-dom';
import './App.css';
import Basket from './components/basket';


function App() {   //Tüm componentleri birbiri içinde yazdığımız için basket componentini çağırmamız yeterli
  return (
    <div className='App'>
      <Basket />
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
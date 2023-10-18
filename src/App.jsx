import './App.css'
import Calculator from './components/Calculator';
import Title from './components/Title';

function App(props) {
  return (
    <div className='app'>
      <Title />
      <Calculator />
    </div>
  );
}

export default App;
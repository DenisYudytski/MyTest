import './App.css';
import { Header } from './components/header/header';
import { Image } from './components/image/image';
import { Home } from './pages/home/home';
import spiral from './img/svg/Spiral.svg'

function App() {
  return (
    <div className="App">
      <div className='spiral'><Image src={spiral} /></div>
      <Header />
      <Home />
    </div>
  );
}

export default App;

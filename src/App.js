import './App.css';
import { Header } from './components/header/header';
import { Image } from './components/image/image';
import { Home } from './pages/home/home';
import spiral from './img/svg/Spiral.svg'
import { Footer } from './components/footer/footer';

function App() {

  return (

    <div className="App">
      <div className='spiral'><Image src={spiral} /></div>
      <Header />
      <Home />
      <Footer />
    </div>

  );
}

export default App;

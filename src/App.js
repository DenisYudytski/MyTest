import './App.css';
import { Header } from './components/header/header';
import { Image } from './components/image/image';
import { Home } from './pages/home/home';

import { Footer } from './components/footer/footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setStatus } from './redux/reducers/views';

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(setStatus("loading"))
  //   setTimeout(() => {
  //     dispatch(setStatus("waiting"))
  //   }, 500)
  // }, [])
  // localStorage.clear()
  return (

    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>

  );
}

export default App;

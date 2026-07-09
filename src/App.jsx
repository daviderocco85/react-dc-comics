import './App.css';
// componenti
import { Header } from './components/Header';
import { Main } from './components/Main';
import { BlueBar } from './components/BlueBar';
import { Footer } from './components/Footer';

//dati privatizzati
import { blueBarLinks } from "./data/blueBarLinks.js";
import { footerTopLinks } from './data/footerTopLinks.js';
import { footerBottomNavLinks } from './data/footerBottomNavLinks.js';
import { headerNavLinks } from './data/headerNavLinks.js';
import comics from './data/comics.js';

const App = () => {


  return (
    <>
      <Header linksNav={headerNavLinks} />
      <Main comics={comics} />
      <BlueBar links={blueBarLinks} />
      <Footer linksTop={footerTopLinks} linksBottom={footerBottomNavLinks} />

    </>
  )
};

export default App

import Header from './components/Header/Header';
import CardVertical from './components/CardVertical/CardVertical';
import CardHorizontal from './components/CardHorizontal/CardHorizontal';
import CardSmall from './components/CardSmall/CardSmall';
import Footer from './components/Footer/Footer';
import './global.css';
function App() {
  return (
    <>
      <Header />
      <CardVertical />
      <CardHorizontal />
      <CardSmall />
      <Footer />
    </>
  )
}

export default App;

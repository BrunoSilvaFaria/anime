import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './global.css';

// 2- Reaproveitando componentes
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />

      <Outlet />
      
      <Footer />
      
      <ScrollToTop />
    </>
  )
}

export default App;

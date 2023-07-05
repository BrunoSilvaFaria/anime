import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
import AnimeDetails from './pages/Anime Details/AnimeDetails';
import Footer from './components/Footer/Footer';
import Sign from './pages/Sign/Sign';
import Login from './pages/Login/Login';
import './global.css';
function App() {
  return (
    <>
      <Header />
      {/* <AnimeDetails /> */}
      {/* <Home /> */}
      <Sign />
      <Login />
      <Footer />
    </>
  )
}

export default App;

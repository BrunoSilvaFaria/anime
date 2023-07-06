import Header from './components/Header/Header';
// import Home from './pages/Home/Home';
import AnimeWatch from './pages/AnimeWatch/AnimeWatch';
import AnimeEpisodes from './pages/AnimeEpisodes/AnimeEpisodes';
import AnimeDetails from './pages/Anime Details/AnimeDetails';
import Footer from './components/Footer/Footer';
import Sign from './pages/Sign/Sign';
import Login from './pages/Login/Login';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import './global.css';
function App() {
  return (
    <>
      <Header />
      {/* <AnimeDetails /> */}
      {/* <Home /> */}
      {/* <Sign />
      <Login /> */}
      {/* <BlogDetails /> */}
      {/* <AnimeWatch/> */}
      <AnimeEpisodes />
      <Footer />
    </>
  )
}

export default App;

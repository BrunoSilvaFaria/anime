import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

import Home from './pages/Home/Home';
import AnimeCategorie from './pages/AnimeCategorie/AnimeCategorie';
import AnimeDetails from './pages/AnimeDetails/AnimeDetails';
import AnimeEpisodes from './pages/AnimeEpisodes/AnimeEpisodes';
import AnimeWatch from './pages/AnimeWatch/AnimeWatch';
import BlogDetails from './pages/BlogDetails/BlogDetails'
import Blog from './pages/Blog/Blog'
import Login from './pages/Login/Login';
import Sign from './pages/Sign/Sign';
// Configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        path: "/",
        element: <Home />,
      },
      { 
        path: "animeCategorie",
        element: <AnimeCategorie />,
      },
      { 
        path: "animeDetails",
        element: <AnimeDetails />,
      },
      { 
        path: "/animeEpisodes",
        element: <AnimeEpisodes/>,
      },
      { 
        path: "/animeWatch",
        element: <AnimeWatch />,
      },
      { 
        path: "/blog",
        element: <Blog />,
      },
      { 
        path: "/blogDetails",
        element: <BlogDetails />,
      },
      { 
        path: "/login",
        element: <Login />,
      },
      { 
        path: "/sign",
        element: <Sign />,
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
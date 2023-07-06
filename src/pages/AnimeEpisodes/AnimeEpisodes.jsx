import React from "react";
import AnimeDetails from "../Anime Details/AnimeDetails";
import { HeaderEpisodes, Episodes } from './styles.js';
export default function AnimeEpisodes() {
  return (
      <>
      <AnimeDetails />

      <Episodes>
        <HeaderEpisodes> List Episodes</HeaderEpisodes>
        <nav>
          <ul>
            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 1
                </a>
            </li>

            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 2
                </a>
            </li>

            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 3
                </a>
            </li>

            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 4
                </a>
            </li>

            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 5
                </a>
            </li>

            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 6
                </a>
            </li>
            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 7
                </a>
            </li>
            <li>
                <a href="">
                  <img src="/assets/videos/anime-watch.jpg" alt="Foto do episodio" />
                  Episodio 8
                </a>
            </li>
          </ul>
          <ul className="paginas">
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">Ultima página</a></li>
          </ul>
        </nav>
      </Episodes>
      </>
    
    );
  }

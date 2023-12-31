import React from "react";
import Reviews from '../../components/Review/Reviews';
import { Link } from "react-router-dom";
import { WatchConteiner, VideoConteiner, Episodes, Comment, HeaderComment } from "./styles";
export default function AnimeWatch() {
  return (
    <WatchConteiner>
      <VideoConteiner>
        <video src="/assets/videos/1.mp4" poster="/assets/videos/anime-watch.jpg" controls></video>
        <Episodes>
          <a href="">&#8592;</a>
          <Link to='/animeEpisodes'>Lista de episodios</Link>
          <a href="">&#8594;</a>
        </Episodes>
      </VideoConteiner>
      <Reviews />

      <Comment>
        <HeaderComment>Your Comment</HeaderComment>
        <textarea name="" id="" cols="30" rows="10" maxLength="355" placeholder="Your Comment"></textarea>
        <button type="submit">Review</button>
      </Comment>
        </WatchConteiner>
    );
  }

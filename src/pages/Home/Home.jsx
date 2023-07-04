import React from "react";

import CardVertical from "../../components/CardVertical/CardVertical";
import { ConteinerVertical } from "../../components/CardVertical/styles";
import HeaderVertical from "../../components/Components/Componente/HeaderVertical";

import CardHorizontal from "../../components/CardHorizontal/CardHorizontal";
import { ConteinerHorizontal } from "../../components/CardHorizontal/styles";
import HeaderHorizontal from "../../components/Components/Componente/HeaderHorizontal";

import CardSmall from "../../components/CardSmall/CardSmall";
import { ConteinerSmall } from "../../components/CardSmall/styles";
import HeaderSmall from "../../components/Components/Componente/HeaderSmall";

import dataTrending from '../../data/trendingData';
import dataPopular from '../../data/popularData';
import dataRecent from '../../data/recentData';
import dataLive from '../../data/liveData';
import dataView from '../../data/viewData';
import dataComment from '../../data/commentData';

import { HomeConteiner } from './styles';
import Header from '../../components/Header/Header';

export default function Home() {
  const asideViews = dataView.map((item) => {
    return (
      <CardHorizontal
        key={item.title}
        item={item}
      />
    )
  })

  const asideComment = dataComment.map((item) => {
    return (
      <CardSmall
        key={item.title}
        item={item}
      />
    )
  })

  function criaCardVertical(arquivo) {
    return arquivo.map((item) => {
      return (
        <CardVertical
          key={item.title}
          item={item}
        />
      )
    });
    
  };

  return (
      <div>
        <div>
              <HomeConteiner>
          <main>
            <ConteinerVertical>
              <HeaderVertical title="trending now"></HeaderVertical>
              <div>{criaCardVertical(dataTrending)}</div>
            </ConteinerVertical>
            <ConteinerVertical>
              <HeaderVertical title="popular"></HeaderVertical>
              <div>{criaCardVertical(dataPopular)}</div>
            </ConteinerVertical>
            <ConteinerVertical>
              <HeaderVertical title="recently added shows"/>
              <div>{criaCardVertical(dataRecent)}</div>
            </ConteinerVertical>
        
            <ConteinerVertical>
              <HeaderVertical title="live action"/>
              <div>{criaCardVertical(dataLive)}</div>
            </ConteinerVertical>
          </main>
          <aside className="conteiner__aside">
            <aside>
              <ConteinerHorizontal>
                <HeaderHorizontal title="top views"></HeaderHorizontal>
                {asideViews}
              </ConteinerHorizontal>
            </aside>
                  <aside>
              <ConteinerSmall>
                <HeaderSmall title="new comment"></HeaderSmall>
                {asideComment}
              </ConteinerSmall>
            </aside>
          </aside>
              </HomeConteiner>
            </div>
      </div>
    );
  }

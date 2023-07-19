import React from "react";

import CardVertical from "../../components/Cards/CardVertical/CardVertical";
import { ConteinerVertical } from "../../components/Cards/CardVertical/styles";
import HeaderVertical from "../../components/Cards/Header/HeaderVertical";

import CardHorizontal from "../../components/Cards/CardHorizontal/CardHorizontal"
import { ConteinerHorizontal } from "../../components/Cards/CardHorizontal/styles";
import HeaderHorizontal from "../../components/Cards/Header/HeaderHorizontal";

import CardSmall from "../../components/Cards/CardSmall/CardSmall";
import { ConteinerSmall } from "../../components/Cards/CardSmall/styles";
import HeaderSmall from "../../components/Cards/Header/HeaderSmall";

import dataTrending from '../../data/trendingData';
import dataPopular from '../../data/popularData';
import dataRecent from '../../data/recentData';
import dataLive from '../../data/liveData';
import dataView from '../../data/viewData';
import dataComment from '../../data/commentData';

import { criaElementos } from "../../components/criaElementos";
import { HomeConteiner } from './styles';

import CardsHorizontais from "../../components/Cards/CardsHorizontais";

export default function Home() {
  return (
      <div>
        <div>
              <HomeConteiner>
          <main>
            <ConteinerVertical>
              <HeaderVertical title="trending now"></HeaderVertical>
                <div>{criaElementos(dataTrending, CardVertical)}</div>
            </ConteinerVertical>
            
            <ConteinerVertical>
              <HeaderVertical title="popular"></HeaderVertical>
              <div>{criaElementos(dataPopular, CardVertical)}</div>
            </ConteinerVertical>
            <ConteinerVertical>
              <HeaderVertical title="recently added shows"/>
              <div>{criaElementos(dataRecent, CardVertical)}</div>
            </ConteinerVertical>
        
            <ConteinerVertical>
              <HeaderVertical title="live action"/>
              <div>{criaElementos(dataLive, CardVertical)}</div>
            </ConteinerVertical>
          </main>

          <aside className="conteiner__aside">
            <aside>
              <CardsHorizontais data={dataView} title='Top views' />
            </aside>
                  <aside>
              <ConteinerSmall>
                <HeaderSmall title="new comment"></HeaderSmall>
                <div>{criaElementos(dataComment, CardSmall)}</div>
              </ConteinerSmall>
            </aside>
          </aside>
              </HomeConteiner>
            </div>
      </div>
    );
  }

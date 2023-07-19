import React, {useState} from "react";

import CardVertical from "../../components/Cards/CardVertical/CardVertical";
import { ConteinerVertical } from "../../components/Cards/CardVertical/styles";

import CardsHorizontais from "../../components/Cards/CardsHorizontais";

import CardSmall from "../../components/Cards/CardSmall/CardSmall";
import { ConteinerSmall } from "../../components/Cards/CardSmall/styles";
import HeaderSmall from "../../components/Cards/Header/HeaderSmall";

import HeaderChose from "../../components/Cards/Header/HeaderChose";
import dataView from '../../data/viewData';
import dataComment from '../../data/commentData';

import { criaElementos } from "../../components/criaElementos";
import { filtraElementos } from "../../components/filtraElementos";
import { ordenaElementos } from "../../components/ordenaElementos";
import  SelecionaElementos  from "../../components/selecionaElementos";


import dataCategoria from '../../data/categoriaData';
import { HomeConteiner } from './styles';

export default function Home() {
  const handleSelectTitle = SelecionaElementos({ value: 'All' });
  const handleSelectOrder = SelecionaElementos({ value: 'a' });
  
  const filtered = filtraElementos(dataCategoria, handleSelectTitle.selectedValue, 'categories');
  const sortedData = ordenaElementos(filtered, handleSelectOrder.selectedValue);
  return (
      <div>
        <div>
              <HomeConteiner>
          <main>
            <ConteinerVertical>
              <HeaderChose
                title={handleSelectTitle.selectedValue}
                functionTitle={handleSelectTitle.handleSelect}
                functionOrder={handleSelectOrder.handleSelect}
              />
                  <div>
                      <div>
                        {criaElementos(sortedData, CardVertical)}
                      </div>
                  </div>
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

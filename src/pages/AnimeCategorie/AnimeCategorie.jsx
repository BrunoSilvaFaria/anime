import React, {useState} from "react";

import CardVertical from "../../components/Cards/CardVertical/CardVertical";
import { ConteinerVertical } from "../../components/Cards/CardVertical/styles";

import CardHorizontal from "../../components/Cards/CardHorizontal/CardHorizontal"
import { ConteinerHorizontal } from "../../components/Cards/CardHorizontal/styles";
import HeaderHorizontal from "../../components/Cards/Header/HeaderHorizontal";

import CardSmall from "../../components/Cards/CardSmall/CardSmall";
import { ConteinerSmall } from "../../components/Cards/CardSmall/styles";
import HeaderSmall from "../../components/Cards/Header/HeaderSmall";

import HeaderChose from "../../components/Cards/Header/HeaderChose";
import dataView from '../../data/viewData';
import dataComment from '../../data/commentData';

import { criaElementos } from "../../components/criaElementos";
import dataCategoria from '../../data/categoriaData';
import { HomeConteiner } from './styles';

export default function Home() {
    const [selectedValueTitle, setSelectedValueTitle] = useState('All');
    const handleSelectTitle = (event) => {
      setSelectedValueTitle(event.target.value);
    };
      
    const [selectedValueOrder, setSelectedValueOrder] = useState('a');
    const handleSelectOrder = (event) => {
      setSelectedValueOrder(event.target.value);
    };
    const filteredData = dataCategoria.filter(item => {
      return item.categories && item.categories.includes(selectedValueTitle);
    });
    let sortedData;
    if (selectedValueOrder === 'a') {
      sortedData = filteredData.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortedData = filteredData.sort((a, b) => b.title.localeCompare(a.title));
    }
  return (
      <div>
        <div>
              <HomeConteiner>
          <main>
            <ConteinerVertical>
              <HeaderChose
                title={selectedValueTitle}
                functionTitle={handleSelectTitle}
                functionOrder={handleSelectOrder}
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
              <ConteinerHorizontal>
                <HeaderHorizontal title="top views"></HeaderHorizontal>
                <div>{criaElementos(dataView, CardHorizontal)}</div>
              </ConteinerHorizontal>
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

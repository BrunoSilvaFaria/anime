import {React, useState, useEffect} from 'react';

import { filtraElementos } from '../filtraElementos';
import { criaElementos } from '../criaElementos';

import { ConteinerHorizontal } from './CardHorizontal/styles';
import CardHorizontal from './CardHorizontal/CardHorizontal';

import { HeaderSubtitle, HeaderMedium } from './Header/styles';


export default function CardsHorizontais(props) {
  const [selectedValue, setSelectedValue] = useState('Day');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredData = filtraElementos(props.data, selectedValue, 'watch');
    setFiltered(filteredData);
  }, [props.data, selectedValue]);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <ConteinerHorizontal>
      <HeaderMedium>
        <HeaderSubtitle>{props.title}</HeaderSubtitle>
        <nav>
          <ul>
            <li>
              <button 
                onClick={() => handleSelect('Day')}
                className={selectedValue === 'Day' ? 'button-active' : ''}>
                    Day
                </button>
            </li>
            <li>
              <button 
                onClick={() => handleSelect('Week')}
                className={selectedValue === 'Week' ? 'button-active' : ''}>
                              Week
                          </button>
            </li>
            <li>
              <button 
                onClick={() => handleSelect('Month')}
                className={selectedValue === 'Month' ? 'button-active' : ''}>
                    Month
                          </button>
            </li>
            <li>
              <button 
                onClick={() => handleSelect('Years')}
                className={selectedValue === 'Years' ? 'button-active' : ''}>
                              Years
               </button>
            </li>
          </ul>
        </nav>
      </HeaderMedium>
      <div>{criaElementos(filtered, CardHorizontal)}</div>
    </ConteinerHorizontal>
  );
}



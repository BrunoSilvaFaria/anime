import React from 'react';
import { HeaderChoses } from "./styles";
import { HeaderSubtitle } from "./styles";

export default function HeaderChose(props) {
    return (
            <HeaderChoses>
                <HeaderSubtitle>{props.title}</HeaderSubtitle>
                <div className="selects">
                    <div className="select">
                        <label for="cars">Categorie:</label>
                        <select name="categorie" id="categorie" onChange={props.functionTitle}>
                        <option value="All">All</option>
                        <option value="Kodomo">Kodomo</option>
                        <option value="Shounen">Shounen</option>
                        <option value="Shoujo">Shoujo</option>
                        <option value="Seinen">Seinen</option>
                        <option value="Josei">Josei</option>
                        </select>
                    </div>
                    <div className="select" onChange={props.functionOrder}>
                        <label for="cars">Order by:</label>
                        <select name="categorie" id="categorie">
                        <option value="a">A-Z</option>
                        <option value="z">Z-A</option>
                        </select>
                    </div>
                </div>
            </HeaderChoses>
    )
}
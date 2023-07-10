import { React } from "react";
import { BlogConteiner, Cards } from './styles';
import CardMain  from "./CardMain";
import CardSec from "./CardSec";
import dataBlog from '../../data/blogData';
export default function Blog() {
  const cardMain = dataBlog.collumnMain.map((item) => {
    return (
      <CardMain
        key={item.title}
        item={item}
      />
    )
  })
  const cardSec = dataBlog.collumnSec.map((item) => {
    return (
      <CardSec
        key={item.title}
        item={item}
      />
    )
  })
  return (
    <BlogConteiner>
        <div className="cards">
          <Cards>{cardMain}</Cards>
          <Cards>{cardSec}</Cards>
        </div>
    </BlogConteiner>
    );
  }

import { React } from "react";
import { ButtonLogin } from "../../Button/styles";
import { Conteiner } from "./styles";

export default function ButtonLog(props) {
  return (
      <Conteiner>
        <ButtonLogin type="submit">Login now</ButtonLogin>
        <a href="#">Forgot you password?</a>
    </Conteiner>
  );
 
  }

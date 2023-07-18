import { React } from "react";
import { ButtonLogin } from "../../Button/styles";
import { Conteiner } from "./styles";
import { Link } from "react-router-dom";

export default function ButtonSigu(props) {
  return (
<Conteiner>
        <ButtonLogin type="submit">Login now</ButtonLogin>
        <p>
          Already have an account?
        <Link to='/login' className="link"> Log in</Link>
        </p>
    </Conteiner>
    );
  }

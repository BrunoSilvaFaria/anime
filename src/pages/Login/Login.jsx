import { React } from "react";
import { Link } from "react-router-dom";

import { ButtonRegister } from "../../components/Button/styles.js";
import { ConteinerInputs } from "../../components/Form/styles";
import { LoginMain, LoginConteiner } from './styles';

import ButtonLog from "../../components/Form/ButtonLog/ButtonLog";
import BannerMedium from "../../components/Banner/BannerMedium/BannerMedium.jsx";
import Form from "../../components/Form/Form/Form";
import HeaderForm from "../../components/Form/HeaderForm/HeaderForm";

export default function Login() {
  return (
        <div>
      <BannerMedium
        title="Login"
          />
                <LoginMain>
                <LoginConteiner>
            <ConteinerInputs>
              <HeaderForm title="Login" />
              <Form register="false" />
              <ButtonLog />
            </ConteinerInputs>
            <section>
            <HeaderForm title="Don't Have An Account?" />
              <Link to='/sign'>
                <ButtonRegister type="submit">Register now</ButtonRegister>
              </Link>
            </section>
          </LoginConteiner>
          
          </LoginMain>
        </div>
    );
  }

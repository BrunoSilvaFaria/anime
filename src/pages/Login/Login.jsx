import { React } from "react";
import { Link } from "react-router-dom";

import { ButtonRegister } from "../../components/Button/styles.js";
import { ConteinerInputs, Main } from "../../components/Form/styles";
import { LoginConteiner } from './styles';

import ButtonLog from "../../components/Form/ButtonLog/ButtonLog";
import BannerMedium from "../../components/Banner/BannerMedium/BannerMedium.jsx";
import Form from "../../components/Form/Form/Form";
import HeaderForm from "../../components/Form/HeaderForm/HeaderForm";
import Social  from "../../components/Form/Social/Social.jsx";
import { SocialConteiner } from "../../components/Form/Social/styles.js";
export default function Login() {
  return (
        <div>
      <BannerMedium title="Login" />
      <Main>
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
        
        <SocialConteiner>
          <h3>Or</h3>
          <Social/></SocialConteiner>
          </Main>
        </div>
    );
  }

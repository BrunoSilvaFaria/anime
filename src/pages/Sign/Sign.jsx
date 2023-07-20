import { React } from "react";
import { SignUpConteiner } from "./styles";
import { ConteinerInputs, Main } from "../../components/Form/styles";
import BannerMedium from '../../components/Banner/BannerMedium/BannerMedium';
import HeaderForm from "../../components/Form/HeaderForm/HeaderForm";
import ButtonSigu from "../../components/Form/ButtonSig/ButtonSigu";
import Form from "../../components/Form/Form/Form";

import { SocialConteiner } from "../../components/Form/Social/styles";
import Social from "../../components/Form/Social/Social";
export default function Sign() {
  return (
    <div>
      <BannerMedium title="Sign Up" />
      <Main>
        <SignUpConteiner>
          <ConteinerInputs>
            <HeaderForm title="Sign Up" />
            <Form register="true" />
            <ButtonSigu />
          </ConteinerInputs>
      
            <SocialConteiner>
              <HeaderForm title="Login With:"/>
            <Social />
            </SocialConteiner>
        </SignUpConteiner>
      </Main>
    </div>
    );
  }

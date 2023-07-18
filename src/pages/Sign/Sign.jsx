import { React } from "react";
import { SignUpConteiner } from "./styles";
import { ConteinerInputs } from "../../components/Form/styles";

import HeaderForm from "../../components/Form/HeaderForm/HeaderForm";
import ButtonSigu from "../../components/Form/ButtonSig/ButtonSigu";
import Form from "../../components/Form/Form/Form";

import { SocialConteiner } from "../../components/Form/Social/styles";
import Social from "../../components/Form/Social/Social";
export default function Sign() {
  return (
    <SignUpConteiner>
      <ConteinerInputs>
        <HeaderForm title="Login" />
        <Form register="true" />
        <ButtonSigu />
      </ConteinerInputs>
        
        <SocialConteiner>
          <HeaderForm title="Login With:"/>
        <Social />
        </SocialConteiner>
    </SignUpConteiner>
    );
  }

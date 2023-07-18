import { React } from "react";
// import { SignUpConteiner, SignUpForm } from './styles'

import {  
  ButtonFace,
  ButtonGoogle,
  ButtonTwitter,
} from "../../Button/styles";

import {
  IconFacebook,
  IconGoogle,
  IconTwitter,
} from "../../../Icons.js";


export default function Social() {
  return (
    <>
              <ButtonFace>
                <IconFacebook className="icon"/>
                <p>Sign in With Facebook</p>
              </ButtonFace>
              <ButtonGoogle>
                <IconGoogle className="icon"/>
                <p>Sign in With Google</p>
              </ButtonGoogle>
              <ButtonTwitter>
                <IconTwitter className="icon"/>
                <p>Sign in With Twitter</p>
              </ButtonTwitter>
    </>
    );
  }

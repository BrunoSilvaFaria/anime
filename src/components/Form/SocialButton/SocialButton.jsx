import { React } from "react";
// import { SignUpConteiner, SignUpForm } from './styles'

import {  
  ButtonFace,
  ButtonGoogle,
  ButtonTwitter,
} from "../../components/Button/styles.js";

import {
  IconFacebook,
  IconGoogle,
  IconTwitter,
} from "../../Icons";

export default function SocialButton() {
  return (
  <div>
            <ButtonFace>
              <IconFacebook/>
              <p>Sign in With Facebook</p>
            </ButtonFace>
            <ButtonGoogle>
              <IconGoogle/>
              <p>Sign in With Google</p>
            </ButtonGoogle>
            <ButtonTwitter>
              <IconTwitter/>
              <p>Sign in With Twitter</p>
            </ButtonTwitter>
  </div>
    );
  }

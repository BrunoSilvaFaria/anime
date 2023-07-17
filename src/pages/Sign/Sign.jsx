import { React } from "react";
import { SignUpConteiner, SignUpForm } from './styles'
import {
  InputConteiner,
  Input,
  FormHeader
} from "../../components/Form/styles";

import {  
  ButtonLogin,
  ButtonFace,
  ButtonGoogle,
  ButtonTwitter,
} from "../../components/Button/styles.js";

import {
  IconFacebook,
  IconGoogle,
  IconTwitter,
  IconUser,
  IconLock,
  IconEnvelope
} from "../../Icons";

export default function Sign() {
  return (
    <h1>titulo</h1>
      //   <SignUpConteiner>
      //   <SignUpForm action="">
      //     <FormHeader>Sign up</FormHeader>
      //     <InputConteiner>
      //       <IconEnvelope/>
      //       <Input type="email" placeholder="Email address"></Input>
      //     </InputConteiner>
      //     <InputConteiner>
      //       <IconUser/>
      //       <Input type="text" placeholder="Your Name"></Input>
      //     </InputConteiner>
      //     <InputConteiner>
      //       <IconLock/>
      //       <Input type="password" placeholder="Password"></Input>
      //     </InputConteiner>
      //     <ButtonLogin type="submit">Login Now</ButtonLogin>
      //     <p>Already have an account? <a href="#">Log In!</a></p>
      //   </SignUpForm>
      //   <section>
      //     <FormHeader>Login With:</FormHeader>
      //     <ButtonFace>
      //       <IconFacebook/>
      //       <p>Sign in With Facebook</p>
      //     </ButtonFace>
      //     <ButtonGoogle>
      //       <IconGoogle/>
      //       <p>Sign in With Google</p>
      //     </ButtonGoogle>
      //     <ButtonTwitter>
      //       <IconTwitter/>
      //       <p>Sign in With Twitter</p>
      //     </ButtonTwitter>
      //   </section>
      // </SignUpConteiner>
    );
  }

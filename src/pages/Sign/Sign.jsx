import { React } from "react";
import { SignUpConteiner, SignUpForm } from './styles'
import {
  InputConteiner,
  Input,
  ButtonLogin,
  ButtonFace, ButtonGoogle, ButtonTwitter, FormHeader
} from "../../components/Components/Componente/styles";
export default function Sign() {
  return (
        <SignUpConteiner>
        <SignUpForm action="">
          <FormHeader>Sign up</FormHeader>
          <InputConteiner>
            <span>M</span>
            <Input type="email" placeholder="Email address"></Input>
          </InputConteiner>
          <InputConteiner>
            <span>M</span>
            <Input type="text" placeholder="Your Name"></Input>
          </InputConteiner>
          <InputConteiner>
            <span>M</span>
            <Input type="password" placeholder="Password"></Input>
          </InputConteiner>
          <ButtonLogin type="submit">Login Now</ButtonLogin>
          <p>Already have an account? <a href="#">Log In!</a></p>
        </SignUpForm>
        <section>
          <FormHeader>Login With:</FormHeader>
          <ButtonFace>
            <span>F</span>
            <p>Sign in With Facebook</p>
          </ButtonFace>
          <ButtonGoogle>
            <span>F</span>
            <p>Sign in With Google</p>
          </ButtonGoogle>
          <ButtonTwitter>
            <span>F</span>
            <p>Sign in With Twitter</p>
          </ButtonTwitter>
        </section>
      </SignUpConteiner>
    );
  }

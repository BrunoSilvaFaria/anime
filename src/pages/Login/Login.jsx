import { React } from "react";
import { Link } from "react-router-dom";
import { LoginMain, LoginConteiner, SignUpForm, SocialConteiner } from './styles'
import {
  InputConteiner,
  Input,
  FormHeader
} from "../../components/Form/styles";

import {  
  ButtonFace,
  ButtonGoogle,
  ButtonLogin,
  ButtonRegister,
  ButtonTwitter,
} from "../../components/Button/styles.js";
export default function Login() {
  return (
      <LoginMain>
        <LoginConteiner>
          <SignUpForm action="">
            <FormHeader>Login</FormHeader>
            <InputConteiner className="inputConteiner">
              <span>M</span>
              <Input type="email" placeholder="Email address"></Input>
            </InputConteiner>
          
            <InputConteiner className="inputConteiner">
              <span>M</span>
              <Input type="password" placeholder="Password"></Input>
            </InputConteiner>
          
            <div>
              <ButtonLogin type="submit">Login Now</ButtonLogin>
              <a href="#">Forgot you password?</a>
            </div>
          </SignUpForm>

          <section>
            <FormHeader className="header">Don't Have An Account?</FormHeader>
            <Link to='/sign'>
              <ButtonRegister type="submit">Register now</ButtonRegister>
            </Link>
          </section>
        </LoginConteiner>
        
        <SocialConteiner>
          <FormHeader>Or</FormHeader>
          <div className="social">
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
          </div>
        </SocialConteiner>
        </LoginMain>
    );
  }

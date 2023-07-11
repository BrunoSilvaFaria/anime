import { React } from "react";
import { Link } from "react-router-dom";
import { LoginMain, LoginConteiner, SignUpForm, SocialConteiner } from './styles'
import {
  InputConteiner,
  Input,
  ButtonLogin,
  ButtonFace, ButtonGoogle, ButtonTwitter, FormHeader, ButtonRegister
} from "../../components/Components/Styles/styles";
export default function Login() {
  return (
      <LoginMain>
        <LoginConteiner>
          <SignUpForm action="">
            <FormHeader>Login</FormHeader>
            <InputConteiner>
              <span>M</span>
              <Input type="email" placeholder="Email address"></Input>
            </InputConteiner>
          
            <InputConteiner>
              <span>M</span>
              <Input type="password" placeholder="Password"></Input>
            </InputConteiner>
          
            <div>
              <ButtonLogin type="submit">Login Now</ButtonLogin>
              <a href="#">Forgot you password?</a>
            </div>
          </SignUpForm>

          <section>
            <FormHeader className="header">Don't Have An Account Yet?</FormHeader>
            <Link to='/sign'>
              <ButtonRegister type="submit">Register now</ButtonRegister>
            </Link>
          </section>
        </LoginConteiner>
        
        <SocialConteiner>
          <FormHeader>Or</FormHeader>
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
        </SocialConteiner>
        </LoginMain>
    );
  }

import { React } from "react";
import { InputConteiner, Input } from "../styles";
import { IconLock, IconEnvelope, IconUser } from "../../../Icons";

import ButtonConteiner from "../ButtonLog/ButtonLog";
export default function Form(props) {
  const isRegister = props.register;
  return ( 
    <>
        { isRegister === "true" &&
          <InputConteiner className="inputConteiner">
          <IconUser  className="icon"/>
            <Input type="text" placeholder="User Name"></Input>
          </InputConteiner>
        }
        
          <InputConteiner className="inputConteiner">
          <IconEnvelope className="icon" size={20}/>
            <Input type="email" placeholder="Email address"></Input>
          </InputConteiner>
        
          <InputConteiner className="inputConteiner">
            <IconLock className="icon"/>
            <Input type="password" placeholder="Password"></Input>
          </InputConteiner>
      
      </>

    );
  }

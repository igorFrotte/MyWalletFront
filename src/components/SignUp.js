import { useState } from "react";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import { Auth, TemplateInput, TemplateButton } from "../assets/styles/styledComponents";
import { ThreeDots } from  'react-loader-spinner';
import { singUp } from "../services/axiosService";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {

  const navigate = useNavigate();
  const [formInf, setFormInf] = useState({email:"", password:"", name:"", passwordConfirm:"" });
  const [disabled, setDisabled] = useState(false);
  
  function updateInfs(e){
    setFormInf({
      ...formInf,
      [e.target.name] : e.target.value 
    });
  }

  function handleForm(e){
    e.preventDefault();
    setDisabled(true);

    if(formInf.password !== formInf.passwordConfirm){
      alert("Senhas diferentes!");
      setDisabled(false);
      return;
    }
    
    const obj = {
      email: formInf.email,
      password: formInf.password,
      name: formInf.name
    }
    const promise = singUp(obj);
    promise
      .then(() => navigate("/"))
      .catch(() => {
        alert("Erro ao criar usuário!");
        setDisabled(false);
      });   
  }

    return (
      <>
        <Auth disabled={disabled}>
          <Logo />
          <form onSubmit={handleForm}>
            <TemplateInput required type="text" name="name" value={formInf.name}
              placeholder="Nome" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="email" name="email" value={formInf.email}
              placeholder="E-mail" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="password" name="password" value={formInf.password}
              placeholder="Senha" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="password" name="passwordConfirm" value={formInf.passwordConfirm}
              placeholder="Confirme a senha" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateButton disabled={disabled} height="45" width="300" type="submit" >
              {disabled? <ThreeDots color="#ffffff" height={40} width={50}/> : "Cadastrar"}
              </TemplateButton>
          </form>
          <Link to="/" ><p>Já tem uma conta? Entre agora!</p></Link>
        </Auth>
      </>
    );
}
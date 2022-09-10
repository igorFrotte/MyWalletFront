import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/imgs/logo.svg";
import { Auth, TemplateInput, TemplateButton } from "../assets/styles/styledComponents";
import { ThreeDots } from  'react-loader-spinner';
import { login } from "../services/axiosService";

export default function Login() {

  const navigate = useNavigate();
  const [formInf, setFormInf] = useState({email:"", password:""});
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
    const promise = login(formInf);
    promise
      .then((r) => {
        const obj = {token: r.data.token, user: r.data.user};
        localStorage.setItem("myWalletUser", JSON.stringify(obj));
        navigate("/home");
      })
      .catch(() => {
        alert("Erro ao logar!");
        setDisabled(false);
      });  
  }

    return (
      <>
        <Auth disabled={disabled}>
          <Logo />
          <form onSubmit={handleForm}>
            <TemplateInput required type="email" name="email" value={formInf.email}
              placeholder="E-mail" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="password" name="password" value={formInf.password}
              placeholder="Senha" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateButton disabled={disabled} height="45" width="300" type="submit" >
              {disabled? <ThreeDots color="#ffffff" height={40} width={50}/> : "Entrar"}
            </TemplateButton>
          </form>
          <Link to="/cadastro" ><p>Primeira vez? Cadastre-se!</p></Link>
        </Auth>
      </>
    );
}
import { BackGround, TemplateButton, TemplateInput } from "../assets/styles/styledComponents";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { createTransaction } from "../services/axiosService";
import { useNavigate } from "react-router-dom";

export default function Move( { type } ) { 

  const [formInf, setFormInf] = useState({value:"", description:"" });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function updateInfs(e){
    setFormInf({
      ...formInf,
      [e.target.name] : e.target.value 
    });
  }

  function handleForm(e){
    e.preventDefault();
    setDisabled(true);
    
    const obj = {
      ...formInf,
      type
    }
    const promise = createTransaction(obj);
    promise
      .then(() => navigate("/home"))
      .catch(() => {
        alert("Erro ao criar transição!");
        setDisabled(false);
      });   
  } 
  
  return (
    <BackGround disabled={disabled}>
      <div>
        <h3>{type === "positive"? "Nova entrada" : "Nova saída" }</h3>
      </div>
      <form onSubmit={handleForm}>
        <TemplateInput required type="text" name="value" value={formInf.value}
          placeholder="Valor" disabled={disabled}
          onChange={updateInfs}
        />
        <TemplateInput required type="text" name="description" value={formInf.description}
          placeholder="Descrição" disabled={disabled}
          onChange={updateInfs}
        />
        <TemplateButton disabled={disabled} height="45" width="330" type="submit" >
          {disabled? <ThreeDots color="#ffffff"  height={40} width={50}/> : 
            type === "positive"? "Salvar entrada" : "Salvar saída" }
        </TemplateButton>
      </form>
    </BackGround>
  );
}
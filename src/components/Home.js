import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BackGround } from "../assets/styles/styledComponents";
import { listTransactions } from "../services/axiosService";

export default function Home() {

  const [transactions, setTransactions] = useState([]);
  const balance = { show: 0, value: 0, type: ""};
  const navigate = useNavigate();
  const name = JSON.parse(localStorage.getItem("myWalletUser")).user;

  useEffect(() => {
    renderTransactions();
  }, []); 

  function renderTransactions(){
    const promise = listTransactions();
    promise
      .then((r) => {
        setTransactions(r.data);
      })
      .catch(() => alert("algo deu errado..."));
  }
  
  return (
    <BackGround>
      <div>
        <h3>Olá, {name}</h3>
        <Link to="/"><ion-icon name="exit-outline"></ion-icon></Link>
      </div>
      <Template>
        {transactions.map((e, index) => {
          if(e.type === "positive"){
            balance.value += Number(e.value);
          }else {
            balance.value -= Number(e.value);
          }
          if(balance.value >= 0){
            balance.type = "positive";
            balance.show = balance.value;
          }else {
            balance.type = "negative";
            balance.show = balance.value*(-1);
          }
          return (
            <div key={index}>
              <div>
                <div>{e.date}</div>
                <div>{e.description}</div>
              </div>
              <ValueColor type={e.type}>{e.value}</ValueColor>
            </div>
          );
        })}
        {transactions.length > 0 ? 
          <div>
            <div>SALDO</div>
            <ValueColor type={balance.type}>{balance.show.toFixed(2)}</ValueColor>
          </div>
          :
          <NoItens><p>Não há registros de entrada ou saída</p></NoItens>
        }
      </Template>
      <Boxs>
        <div onClick={() => navigate("/entrada")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <div>Nova entrada</div>
        </div>
        <div onClick={() => navigate("/saida")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <div>Nova saída</div>
        </div>
      </Boxs>
    </BackGround>
  );
}

const Boxs = styled.div`
width: 330px;
display: flex;
justify-content: space-between;
margin: 10px 0;

& > div {
  cursor: pointer;
  width: 150px;
  height: 120px;
  background: #A328D6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  & > div {
    width: 64px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
  }
  ion-icon {
        width: 25px;
        height: 25px;
    }
}
`;

const Template = styled.div`
width: 330px;
height: 450px;
background: #FFFFFF;
border-radius: 5px;
padding: 10px;
font-size: 16px;
line-height: 19px;
position: relative;

& > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
& > div > div {
  display: flex;
}
& > div > div > div:nth-child(1) {
  color: #C6C6C6;
}
& > div > div > div:nth-child(2) {
  margin-left: 10px;
}
& > div:last-child {
  width: calc(100% - 20px);
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 17px;
  line-height: 20px;
  & > div:first-child {
    font-weight: 700;
  }
}
`;

const NoItens = styled.p`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

p {
  width: 200px;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
}
`;

const ValueColor = styled.div`
${props => {
        if(props.type === "positive"){
            return `color: #03AC00;`; 
        }else{
            return `color: #C70000;`; 
        }
    }}
`;
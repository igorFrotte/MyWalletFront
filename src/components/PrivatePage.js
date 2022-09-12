import { useState } from "react";
import { validToken } from "../services/axiosService";

function renderError() {
  localStorage.clear("myWalletUser");
  return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

function verification(children, setRender) {
  const promise = validToken();
    promise
      .then((r) => {
        setRender(
          <>
            {children}
          </>
        );
      })
      .catch(() => {
        return renderError();
      }); 
}

export default function PrivatePage({ children }) {

  const [render, setRender] = useState(<></>);

  const auth = JSON.parse(localStorage.getItem("myWalletUser"));

  if (!auth) {
    return renderError();
  } 

  verification(children, setRender);

  return render;
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../assets/styles/globalStyles";
import PrivatePage from "./PrivatePage";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import Move from "./Move"

export default function App() {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home"
            element={
              <PrivatePage>
                <Home />
              </PrivatePage>
            }
          /> 
          <Route path="/entrada" 
            element={
              <PrivatePage>
                <Move type="positive" />
              </PrivatePage>
            }
          />
          <Route path="/saida"   
            element={
              <PrivatePage>
                <Move type="negative" />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

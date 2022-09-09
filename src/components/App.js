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
          <Route path="/move"   /* Mudar Nome */
            element={
              <PrivatePage>
                <Move />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import axios from "axios";

const BASE_URL = "http://localhost:5000/";

function createHeader() {
  const auth = JSON.parse(localStorage.getItem("myWalletUser"));
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }
  };
  return config;
} 

function singUp(body) {
  const promise = axios.post(BASE_URL + "sign-up", body);
  return promise;
}

function login(body) {
  const promise = axios.post(BASE_URL + "sign-in", body);
  return promise;
}

function listTransactions() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "transactions", header);
  return promise;
} 

function createTransaction(body) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + "transactions", body, header);
  return promise;
} 

function validToken() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "token", header);
  return promise;
}

export { singUp, login, listTransactions, createTransaction, validToken };
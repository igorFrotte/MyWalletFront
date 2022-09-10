import axios from "axios";

const BASE_URL = "http://localhost:5000/";

/* function createHeader() {
  const auth = JSON.parse(localStorage.getItem("myWalletUser"));
  const config = {
    headers: { Authorization: `Bearer ${auth.token}` }
  };
  return config;
} */

function singUp(body) {
  const promise = axios.post(BASE_URL + "sign-up", body);
  return promise;
}

function login(body) {
  const promise = axios.post(BASE_URL + "sign-in", body);
  return promise;
}

/* function createHabit(body) {
  const header = createHeader();
  const promise = axios.post(BASE_URL + "habits", body, header);
  return promise;
} 

function listHabits() {
  const header = createHeader();
  const promise = axios.get(BASE_URL + "habits", header);
  return promise;
} */

export { singUp, login };
export const BASE_URL = "https://api.mesto-full.nomoredomains.work";

const headers = {
  "Content-Type": "application/json",
};
const checkStatus = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`${res.status} ${res.statusText}`);
};

//регистрация
export const register = (email, password) => {
  return (
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    .then((res) => {
      return checkStatus(res);
      })
  );
};

//авторизация
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return checkStatus(res);
  })
};

//проверка валидности токена
export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkStatus(res);
  });
};

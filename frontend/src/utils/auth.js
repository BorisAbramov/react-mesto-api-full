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
export const register = (password, email) => {
  // console.log(password);
  // console.log(email);
  return (
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
    .then((res) => {
      return checkStatus(res);
      })
  );
};

//авторизация
// export const authorize = (password, identifier) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       password: password,
//       email: identifier,
//     }),
//   })
//     .then((res) => checkStatus(res))
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem("jwt", data.token);
//         return data;
//       }
//     });
// };
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
    console.log(checkStatus);
  })
};

//проверка валидности токена
// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then((res) => {
//     return checkStatus(res);
//   });
// };
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

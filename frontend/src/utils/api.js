class Api {
    constructor({
      baseUrl,
      headers
    }) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    _checkStatus(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
    }
  
    getUserData() {
      return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers
        })
        .then(res => {
          return this._checkStatus(res)
        });
    }
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
          method: 'GET',
          headers: this._headers
        })
        .then(res => {
          return this._checkStatus(res)
        });
    }
    updateUserData(data) {
      return fetch(`${this._baseUrl}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(data)
        })
        .then(res => {
          return this._checkStatus(res)
        });
    }
    addCard(data) {
      return fetch(`${this._baseUrl}/cards`, {
          method: 'POST',
          headers: this._headers,
          body: JSON.stringify(data)
        })
        .then(res => {
          return this._checkStatus(res)
        });
    }
    deleteCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
          method: 'DELETE',
          headers: this._headers
        })
        .then(res => {
          return this._checkStatus(res)
        });
    }
    updateAvatar(data) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(data)
        })
        .then(res => {
          return this._checkStatus(res)
        });
    }
    changeLikeCardStatus(id, cardIsLiked) {
      return fetch(`${this._baseUrl}/cards/likes/${id}`, {
        method: cardIsLiked ? "PUT" : "DELETE",
        headers: this._headers,
      }).then((res) => this._checkStatus(res));
    }
  }

  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
    headers: {
      authorization: '64d048a5-4ac8-4b66-a3b0-8ed02fba0094',
      'Content-Type': 'application/json'
    }
  });
  export default api;
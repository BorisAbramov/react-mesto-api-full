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
  
    // getUserData() {
    //   return fetch(`${this._baseUrl}/users/me`, {
    //       headers: this._headers
    //     })
    //     .then(res => {
    //       return this._checkStatus(res)
    //     });
    // }
    getUserInfo(token) {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
      }).then((res) => {
        return this._checkStatus(res);
      });
    }

    // getInitialCards() {
    //   return fetch(`${this._baseUrl}/cards`, {
    //       method: 'GET',
    //       headers: this._headers
    //     })
    //     .then(res => {
    //       return this._checkStatus(res)
    //     });
    // }
    getInitialCards(token) {
      return fetch(`${this._baseUrl}/cards`, {
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
      }).then((res) => {
        return this._checkStatus(res);
      });
    }

    // updateUserData(data) {
    //   return fetch(`${this._baseUrl}/users/me`, {
    //       method: 'PATCH',
    //       headers: this._headers,
    //       body: JSON.stringify(data)
    //     })
    //     .then(res => {
    //       return this._checkStatus(res)
    //     });
    // }
    updateDataUser(data, token) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }).then((res) => {
        return this._checkStatus(res);
      });
    }

    // addCard(data) {
    //   return fetch(`${this._baseUrl}/cards`, {
    //       method: 'POST',
    //       headers: this._headers,
    //       body: JSON.stringify(data)
    //     })
    //     .then(res => {
    //       return this._checkStatus(res)
    //     });
    // }
    addNewCard(data, token) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }).then((res) => {
        return this._checkStatus(res);
      });
    }

    // deleteCard(id) {
    //   return fetch(`${this._baseUrl}/cards/${id}`, {
    //       method: 'DELETE',
    //       headers: this._headers
    //     })
    //     .then(res => {
    //       return this._checkStatus(res)
    //     });
    // }
    deleteCard(id, token) {
      return fetch(`${this._baseUrl}/cards/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
      }).then((res) => {
        return this._checkStatus(res);
      });
    }

    // updateAvatar(data) {
    //   return fetch(`${this._baseUrl}/users/me/avatar`, {
    //       method: 'PATCH',
    //       headers: this._headers,
    //       body: JSON.stringify(data)
    //     })
    //     .then(res => {
    //       return this._checkStatus(res)
    //     });
    // }
    updateUserAvatar(data, token) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data),
      }).then((res) => {
        return this._checkStatus(res);
      });
    }

  //   changeLikeCardStatus(id, cardIsLiked) {
  //     return fetch(`${this._baseUrl}/cards/likes/${id}`, {
  //       method: cardIsLiked ? "PUT" : "DELETE",
  //       headers: this._headers,
  //     }).then((res) => this._checkStatus(res));
  //   }
  // }
  likeCard(method, id, token) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        'authorization': `Bearer ${token}`
      },
    }).then((res) => {
      return this._checkStatus(res);
    });
  }
}

const api = new Api({
  baseUrl: "https://api.mesto-full.nomoredomains.work",
});
  export default api;
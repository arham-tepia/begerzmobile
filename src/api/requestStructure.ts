import {
  getToken,
  isTokenExpired,
  resetMyToken
} from '../helpers/tokenManagement';

export const post = async (endpoint: string, data: object) => {
  // const res = await isTokenExpired();
  // if (res) {
  //   await resetMyToken();
  // }
  const token: any = await getToken();
  return (
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      },
      body: JSON.stringify(data)
    })
      // .then(response => console.log(response, 'Status of the request'))
      .then(response => response.json())
      .then(json => {
        return json;
      })
    // .catch(error => {
    //   console.error(error, 'error');
    // })
  );
};
export const get = async (endpoint: string) => {
  // const res = await isTokenExpired();
  // if (res) {
  //   await resetMyToken();
  // }
  const token: any = await getToken();

  return (
    fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      //.then(response => console.log(response.status, 'Status of the request'))
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error, 'error');
      })
  );
};
export const del = async (endpoint: string, data?: any) => {
  // const res = await isTokenExpired();
  // if (res) {
  //   await resetMyToken();
  // }
  const token: any = await getToken();

  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error, 'error');
    });
};
export const patch = async (endpoint: string, data: any) => {
  // const res = await isTokenExpired();
  // if (res) {
  //   await resetMyToken();
  // }
  const token: any = await getToken();

  return fetch(endpoint, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(error => {
      console.error(error, 'error');
    });
};

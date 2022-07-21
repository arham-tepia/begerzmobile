import {
  getRefreshToken,
  getToken,
  isTokenExpired,
  storeToken
} from '../helpers/tokenManagement';
import {resetToken} from './authentication';

async function getMyToken() {
  const isExpired = await isTokenExpired();
  const token: any = await getToken();

  if (!isExpired) {
    return token;
  } else {
    const r = await resetMyToken();
    await storeToken(r);
    return r;
  }
  return;
}

async function resetMyToken() {
  const refreshToken: any = await getRefreshToken();
  const r = await resetToken({refreshToken: refreshToken});
  console.log(r, 'Reset response');

  return r.accessToken;
}

export const post = async (endpoint: string, data: object) => {
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
  const token: any = await getToken();

  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    }
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

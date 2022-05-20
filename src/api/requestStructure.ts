import {TOKEN} from './token';

export const post = async (endpoint: string, data: object) => {
  return (
    fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + TOKEN
      },
      body: JSON.stringify(data)
    })
      // .then(response => console.log(response, 'Status of the request'))
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error, 'error');
      })
  );
};
export const get = async (endpoint: string) => {
  return (
    fetch(endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + TOKEN
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
  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
  return fetch(endpoint, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
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

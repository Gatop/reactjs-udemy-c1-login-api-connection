import Fetch from 'whatwg-fetch';

// recibimos una url y retornamos la respues en formato json
export function get(url){
    return fetch(url)
    .then((response) => {
        return response.json();
    })
};

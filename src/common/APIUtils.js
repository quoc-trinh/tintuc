import axios from 'axios'

const request = (options) => {
   
    
    const headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'chrome://startpage',
        'Origin': 'chrome://startpage'

    });
    const defaults = {headers: headers};

    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getAllPayItems(category) {

    return axios.get(`https://api.recsys.opera.com/api/1.0/suggestions/list?language=vi&timeline=true&count=10&page=0&category=` + category);

}

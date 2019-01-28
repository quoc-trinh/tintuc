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

export function getAllPayItems() {
    return request({
        url: `https://api.recsys.opera.com/api/1.0/suggestions/list?country=vn&language=vi&timeline=true&count=40&page=0`,
        method: 'GET'
    });
}

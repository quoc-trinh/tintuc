import axios from 'axios'

export function getAllPayItems(category) {
    return axios.get(`https://api.recsys.opera.com/api/1.0/suggestions/list?language=vi&timeline=true&count=20&page=0&category=` + category);
}

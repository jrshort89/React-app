import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-72baa.firebaseio.com/'
});

export default instance;
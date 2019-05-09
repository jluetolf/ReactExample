import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(request => {
    console.log(request);
    return request; //important otherwise the intercptors blocks
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
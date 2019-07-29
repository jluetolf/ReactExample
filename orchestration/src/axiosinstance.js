import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:55100/'
})

//instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(request => {
    console.log(request);
    return request; //important otherwise the intercptors blocks
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;
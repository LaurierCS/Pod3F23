import axios from 'axios';

export const fetchData = () => {
    return axios.get('http://localhost:5000/YOUR_ROUTE')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error("There was an error!", error);
        });
};

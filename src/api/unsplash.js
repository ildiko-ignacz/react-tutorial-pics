import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID moP2UEKe1uiZxUqCOPKfwX2TDwX4qyzrVPWjra5SCtU'
    }
});
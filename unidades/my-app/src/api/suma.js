import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.sumaenlinea.mx/unidades/'
});
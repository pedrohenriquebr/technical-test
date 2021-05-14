import axios from "axios";

const API_URL = process.env["REACT_APP_DEV"] ? 'localhost:3333' : 'localhost';

export default axios.create({
    baseURL: 'http://'+API_URL + "/api/",

});
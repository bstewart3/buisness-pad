import axios from "axios";

export default axios.create({
    baseURL: 'https://buisnesspad-default-rtdb.firebaseio.com/'
})
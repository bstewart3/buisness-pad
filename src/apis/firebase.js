import axios from "axios";

export default axios.create({
    baseURL: 'https://businesspad-default-rtdb.firebaseio.com/'
})
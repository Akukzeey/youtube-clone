import axios from 'axios'


const KEY = 'AIzaSyAf8aGttl_bkZIragZW8arx8W5e1mh3VL8'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
})
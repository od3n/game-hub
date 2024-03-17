import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '07410546e5c4496eb83208baed13654b'
    }
})
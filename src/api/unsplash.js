import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Mc6G7MSVHWkvg7BfIqQz6Rl4tsFTIf2H4flZFq4zr-A'
  }
})

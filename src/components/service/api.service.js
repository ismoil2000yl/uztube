import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com';
// const RAPID_API_KEY_ENV = process.env.REACT_APP_PUBLIC_KEY

const options = {
    params: {
      maxResults: '10'
    },
    headers: {
      'X-RapidAPI-Key': '203d4a3453msh1d014bc9e1653ccp1e22d1jsnae1693a0704c',
      // 'X-RapidAPI-Key': '3a51f8913dmshabd7b7f91180112p107038jsn60d4679a2eb8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response
    }
  }
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ApiService } from "../service/api.service"
import {  Box, Container, Typography } from '@mui/material'
import {colors} from '../constants/colors'
import {Videos} from "../"


const Search = () => {
  const {id} = useParams()
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    const getDate = async()=>{
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${id} `)
        setVideos(data.data.items)
      }
      catch(error){
        console.log(error)
      }
    }
    getDate()
  },[id])

  return (
    <Box p={2} sx={{height: '90vh', overflowY: "scroll"}}>
      <Container maxWidth={'90vh'}>
        <Typography variant="h4" fontWeight='bold' mb={2}>
          Search results for <span style={{color: colors.green}}>{id}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Search
import { Stack, Box, Container, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import {Category, Videos} from "../"
import {colors} from '../constants/colors'
import { ApiService } from "../service/api.service"

const Main = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  const selectedCategoryHandle = category => setSelectedCategory(category)

  useEffect(()=>{
    const getDate = async()=>{
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`)
        setVideos(data.data.items)
      }
      catch(error){
        console.log(error)
      }
    }
    getDate()
  },[selectedCategory])

  return(
    <Stack>
      <Category
        selectedCategory={selectedCategory}
        selectedCategoryHandle={selectedCategoryHandle}
      />
      <Box p={2} width={"100%"} height={"90vh"} sx={{overflowY: "scroll"}}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2}>
            {selectedCategory}
            <span style={{color:colors.blue}}> Videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Container>
      </Box>
    </Stack>
  )
}
export default Main
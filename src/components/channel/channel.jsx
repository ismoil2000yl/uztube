import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { ApiService } from "../service/api.service"
import { Box, Container } from "@mui/material"
import {ChannelCard, Videos} from "../"

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    const getDate = async ()=>{
      try{
        const channelDetailData = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        setChannelDetail(channelDetailData.data.items[0])
        const dataVideos = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        setVideos(dataVideos.data.items)
      }
      catch(error){
        console.log(error)
      }
    }
    getDate()
  },[id])

  return (
    <Box minHeight={'95vh'}>
      <Box>
        <Box 
          width={'100%'}
          height={'225px'}
          zIndex={10}
          sx={{
            backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            objectFit: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <ChannelCard video={channelDetail}/>
      </Box>
      <Container maxWidth={'90%'}>
          <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Channel
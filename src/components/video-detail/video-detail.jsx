import {Link, useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ApiService } from '../service/api.service'
import { Box, Chip, Typography, Stack, Avatar} from '@mui/material'
import ReactPlayer from 'react-player'
import {Loader, Videos} from '../'
import { MarkChatRead, Tag, Visibility, ThumbUp,ThumbDownAlt, CheckCircle } from '@mui/icons-material'

const VideoDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState([])
  const [relatedVideo, setRelatedVideo] = useState([])

  useEffect(()=>{
    const getDate = async()=>{
      try{
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`)
        setVideoDetail(data.data.items[0])
        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId${id}&type=video`
        )
        setRelatedVideo(relatedData.data.items)
      }catch(error){
        console.log(error)
      }
    }
    getDate()
  },[id])

  if(!videoDetail?.snippet) return <Loader/>

  return (
    <Box minHeight={'90vh'} mb={10} sx={{overflowY: "scroll"}}>
      <Box display={'flex'} sx={{flexDirection: {xs:'column', md: 'row'}}}>
        <Box width={{xs:'100%', md:'70%'}}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`} 
            className={'react-player'} 
            controls
          />
          <Stack direction={'row'} gap={'20px'} alignItems={'center'} justifyContent={'space-around'} sx={{padding: '0 3.5rem 2rem 4rem'}}>
              <Stack direction={'row'} alignItems={'center'} sx={{cursor: 'pointer'}}>
                <ThumbUp color="success"/>
                {parseInt(videoDetail.statistics.likeCount).toLocaleString()} Likes
              </Stack>
              <Stack direction={'row'} alignItems={'center'} sx={{cursor: 'pointer'}}>
                <ThumbDownAlt sx={{ color: 'red' }}/>
                {/* {parseInt(videoDetail?.statistics?.favoriteCount).toLocaleString()} */}
                 DisLikes
              </Stack>
              <Stack direction={'row'} alignItems={'center'} sx={{cursor: 'pointer'}}>
                <Visibility color="action"/>
                {parseInt(videoDetail.statistics.viewCount).toLocaleString()} Views
              </Stack>
              <Stack direction={'row'} alignItems={'center'} sx={{cursor: 'pointer'}}>
                <MarkChatRead color="primary"/>
                {parseInt(videoDetail.statistics.commentCount).toLocaleString()} Comments
              </Stack>
            </Stack>
          <Typography variant={'h5'} fontWeight={'bold'} sx={{padding: '0 3.5rem 2rem 4rem'}}>
            {videoDetail.snippet.title}
          </Typography>
          <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
          <Stack direction={'row'} sx={{margin: '0 3.5rem 2rem 4rem',}}>
            <Stack direction={'row'} alignItems={'center'} gap={'7px'}>
              <Avatar
                alt={videoDetail.snippet.channelTitle}
                src={videoDetail.snippet.thumbnails.default.url}
              />
              <Typography sx={{fontSize: '16px'}} variant='subtitle2' color={'gray'}>{videoDetail.snippet.channelTitle}</Typography>
              <CheckCircle sx={{fontSize: '16px', color: 'gray', ml: '4px'}}/>
            </Stack>
          </Stack>
          </Link>
          <Box padding={'0 3rem'}>
          {
            videoDetail.snippet.tags.map((item, idx)=>(
              <Chip
                label={item}
                key={idx}
                onDelete={()=>{}}
                deleteIcon={<Tag/>}
                variant="outlined"
                sx={{
                  marginTop: '10px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                  border: '1px solid blue',
                  color: 'black'
                }}
              />
            ))
          }
          </Box>
          <Box sx={{
            background:'#F2F2F2',
            margin: '2rem 3rem 2rem 3rem',
            borderRadius: '30px'
          }}>
            <Typography 
              variant='subtitle2'
              sx={{
                opacity: '.7',
                padding: '2rem 2.5rem',
              }}
            >
              {videoDetail.snippet.description}
            </Typography>
          </Box>
        </Box>
        <Box width={{xs:'100%', md:'30%'}}>
          <Videos videos={relatedVideo && relatedVideo}/>
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail
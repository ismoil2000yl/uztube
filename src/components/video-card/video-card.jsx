import { Card, CardMedia, CardContent, Stack, Avatar, Typography } from "@mui/material"
import {colors} from '../constants/colors'
import moment from 'moment'
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"

const VideoCard = ({video}) => {
  return (
    <Card sx={{width:{xs:'100%', sm:'360px', md:'300px'}, boxShadow:'none', borderRadius:'15px', marginTop: '25px'}}>
        <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
            image={video?.snippet?.thumbnails?.high?.url} 
            alt={video?.snippet?.title}
            sx={{width:{xs:'100%', sm:'360px', md:'300px'}, height:'180px'}}
        />
        </Link>
        <CardContent 
            sx={{
                background:colors.primary,
                height:'200px',
                position:'relative'
            }}
        >
            <Link to={`/video/${video.id.videoId}`}>
            <>
                <Stack direction={'row'}>
                <Typography width={'70%'} variant="subtitle1" fontWeight={'bold'} my={'8px'}>
                    {video?.snippet?.title.slice(0, 50)}
                </Typography>
                <Typography ml={'10px'} width={'30%'} my={'10px'} sx={{opacity:'.6', fontSize:'13px'}}>
                    {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
                {/* <Typography variant="subtitle2" sx={{opacity:'.6'}}>
                    {video?.snippet?.description.slice(0, 60)}
                </Typography> */}
                </Stack>
            </>
            </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
            <Stack
                direction={'row'}
                position={'absalute'}
                bottom={"10px"}
                alignItems={'center'}
                gap={'5px'}
            >
                <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                <Typography variant={'subtitle2'} color={'gray'}>
                    {video?.snippet?.channelTitle}
                    <CheckCircle  sx={{fontSize:'15px', color:'blue', ml:'5px'}}/>
                </Typography>
            </Stack>
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
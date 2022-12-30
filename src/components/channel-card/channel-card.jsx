import { CheckCircle } from "@mui/icons-material"
import { Box, CardContent, Typography, CardMedia } from "@mui/material"
import { Link } from "react-router-dom"


const ChannelCard = ({video}) => {
  return (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '356px', md: '300px'},
            height: '326px',
            margin: 'auto'
        }}
    >
            <Link to={`/channel/${video?.snippet?.channelId}`}>
        <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <CardMedia
                image = {video?.snippet?.thumbnails?.high?.url}
                alt = {video?.snippet?.title}
                sx={{
                    borderRadius: '50%',
                    width: '180px',
                    height: '180px',
                    mb: '2',
                    border: '1px solid #e3e3e3'
                }}
            />
            <Typography variant="h6">
                {video?.snippet?.title}{' '}
                <CheckCircle sx={{fontSize:'22px', color:'gray', ml:'5px', mt: '16px'}}/>
            </Typography>
            {video?.statistics?.subcriberCount && (
                <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'gray'}}>
                    {parseInt(video?.statistics?.subcriberCount).toLocaleString('en-US')} Subcribers
                </Typography>
            )}
        </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard
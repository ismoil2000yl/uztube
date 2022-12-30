import {Box, CircularProgress, Stack} from '@mui/material'

const Loader = () => {
  return (
    <Box minHeight={'90vh'}>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} mt={'12%'} height={'100%'}>
            <CircularProgress/>
        </Stack>
    </Box>
  )
}

export default Loader
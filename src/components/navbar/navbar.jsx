import { Stack, Box } from "@mui/material"
import { Link } from "react-router-dom"
import {Logo} from '../constants'
import {SearchBar} from "../"
import {colors} from '../constants/colors'

const Navbar = () => {
  return (
    <Stack 
    direction={"row"} 
    alignItems={'center'} 
    justifyContent={'space-between'}
    flexWrap={'wrap'}
    p={2} 
    sx={{
        position:'sticky', 
        top:0, 
        zIndex:999, 
        background:colors.blue,
    }}
    >
        <Link to={'/'}>
            <img alt="logo" src={Logo} height={35} id="logo"/>
        </Link>
        <SearchBar/>
        <Box/>
    </Stack>
  )
}

export default Navbar
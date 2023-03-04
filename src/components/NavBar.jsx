import { 
    Container,
    Image,
    Box,
    InputGroup,
    InputLeftElement,
    Input,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import React from 'react'

const NavBar = () => {
  return (
    <Container backgroundColor='#476a6f' display='flex' alignItems='center' justifyContent='space-between' className='navbar' maxW='auto' maxH='100px'>
        <Image h='100px' w='200px' src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150'/>
        <Box id='search-navbar'>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.300' />}
                />
                <Input type='search' placeholder='Seach Product' />
            </InputGroup>
        </Box>
        <CartWidget/>
    </Container>
  )
}

export default NavBar
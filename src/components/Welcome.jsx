import { 
    Grid,
    GridItem
} from '@chakra-ui/react';
import React from 'react'

const Welcome = () => {
  return (
    <>
        <Grid
        className='welcome-container'
        h='600px'
        templateRows={{xl:'repeat(2, 1fr)', lg:'repeat(2, 1fr)', md:'repeat(3, 1fr)'}}
        templateColumns={{xl:'repeat(6, 1fr)', lg:'repeat(6, 1fr)', md:'repeat(6, 1fr)'}}
        gap={4}
        p={4}
        >
            <GridItem rowSpan={{xl: 2, lg: 2, md:2}} colSpan={{xl: 2, lg: 2, md:3, sm:6}} bg='tomato' />
            <GridItem colSpan={{xl: 2, lg: 2, md:3, sm: 3}} bg='papayawhip' />
            <GridItem colSpan={{xl: 2, lg: 2, md:3, sm: 3}} bg='papayawhip' />
            <GridItem colSpan={{xl: 4, lg: 4, md:6, sm:6}} bg='tomato' />
        </Grid>
    </>

  )
}

export default Welcome;
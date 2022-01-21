import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr'
import Navbar from '../navbar'
import VoxelDog from '../voxel-dog'
import Footer from '../footer'
const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale-1' />
                <title>Lautaro Ventura</title>
                <link rel="shortcut icon" href="../images/logo.png" />
            </Head>
            <Navbar path={router.asPath} />
            <Container maxWidth='container.md' pt={14}>
                <NoSsr>
                    <VoxelDog />
                </NoSsr>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}
export default Main;
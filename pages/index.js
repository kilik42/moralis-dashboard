import { Button, Flex, Text } from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {isAuthenticated} = useMoralis();
  if(!isAuthenticated) {
    <>
      <Head> 
        <title>Login | Dashboard</title>
        </Head>

        <Flex>
          <Text>
            Dashboard
          </Text>
          <Button>Login with MetaMask</Button>
        </Flex>
    </>
  }
  return (
    <div className={styles.container}>
      
    </div>
  )
}

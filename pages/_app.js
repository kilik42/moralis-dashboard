import {MoralisProvider} from 'react-moralis';
import {ChakraProvider} from '@chakra-ui/react';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      
        <MoralisProvider
          appId= {process.env.NEXT_APP_ID}
          serverUrl= {process.env.NEXT_SERVER_URL}
        >
          <Component {...pageProps} />
        </MoralisProvider>
         



      </ChakraProvider>
    
   

    

  )
}

export default MyApp

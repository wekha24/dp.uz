import '../styles/Home.css'
import '../styles/Container.css'
import type { AppProps } from 'next/app'
import Homepage from './Homepage'

export default function App({ Component, pageProps }: AppProps) {
  return( 
  <Component {...pageProps} />
  )
}

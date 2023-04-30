import '@/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className='app-bg h-screen'>
      <div className='h-full overflow-y-scroll'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

import { useAuth } from '@/hooks/useAuth';
import '@/styles/globals.css'
import { getUserById } from '@/utils/database';
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
  // console.log(sessionStorage.getItem('token')!)
  // const [user, setUser] = useState(null);
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const user = await getUserById( )
      }
      catch (err) { console.error(err) }
    }
  }, [])

  return (
    <div className='app-bg h-screen'>
      <div className='h-full overflow-y-scroll'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

import { useAuth } from '@/hooks/useAuth';
import '@/styles/globals.css'
import { getUserById } from '@/utils/database';
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {
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

  return <>
    <Component {...pageProps} />
  </>
}

import React from 'react'
import PageMenu from './page-menu'
import { Button } from './ui/button'

import { getSession } from '@auth0/nextjs-auth0';

type Props = {}

async function PageHeader({ }: Props) {
  const session = await getSession();
  const user = session?.user

  return (
    <div className='max-w-screen-xl mx-auto bg-red-400 flex justify-between p-4 items-center'>
      {/* left */}
      <div className='flex  items-center'>
        <div ><img src="/logo.png" className='h-14' /></div>
        <div className='ml-4'><PageMenu /></div>
      </div>
      {/* right */}
      <div>
        {user?.name ?
          (<Button variant="link"><a href='/api/auth/logout'>Logout</a></Button>) :
          (<Button variant="link"><a href='/api/auth/login'>Login</a></Button>)}


      </div>
    </div>
  )
}

export default PageHeader
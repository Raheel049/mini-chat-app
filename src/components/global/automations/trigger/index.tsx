'use client'

import React from 'react'
import { useQueryAutomation } from '@/hooks/user-queries'
import ActiveTrigger from './active'

type Props = {
    id: string
}

const Trigger = ({id}: Props) => {

  const { data } = useQueryAutomation(id)

  // if(data?.data && data?.data?.trigger.length > 0){
    return <div className='flex flex-col ga-y-6 items-center'>
      <ActiveTrigger />

    </div>
  // }
  
 
}

export default Trigger
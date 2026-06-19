'use client'

import React from 'react'
import { useQueryAutomation } from '@/hooks/user-queries'
import ActiveTrigger from './active'
import { Separator } from '@/components/ui/separator'

type Props = {
    id: string
}

const Trigger = ({id}: Props) => {

  const { data } = useQueryAutomation(id)

  // if(data?.data && data?.data?.trigger.length > 0){
    return <div className='flex flex-col ga-y-6 items-center'>
      <ActiveTrigger 
      type={'COMMENT'}
      keywords={[
        {
          id: 'aksljdsadjsala',
          word: 'getStarted',
          automationId: id
        },
      ]}
      />
      <>
        <div className='relative w-6/12'>
          <p className='absolute transform px-2 -translate-y-1/2 top-1/2
          -translate-x-1/2 left-1/2'>
            or
          </p>
          <Separator
          orientation='horizantal'
          className='border-muted border-[1px]'
          />

        </div>
        <ActiveTrigger 
        type={'MESSAGE'}
        keywords={[
          {
            id: 'alsadsakjdlask',
            word: 'Meplease',
            automationId: id
          },
        ]}
        />
      </>
        {/* <ThenAction /> */}
    </div>
  // }
  
 
}

export default Trigger
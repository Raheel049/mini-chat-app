'use client'
import { usePaths } from '../../../hooks/user-nav'
import { LogoSmall } from '../../../svgs/logo-small'
import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { HelpCircleIcon } from "lucide-react"
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from './upgrade'


type Props = {
  slug: string
  page: string
}

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths()
  return <div className='w-[250px] border-[1px]
  radical
  fixed
  left-0
  lg:inline-block
  border-[#545454]
  bg-gradient-to-b
  from-[#7688DD]
  via-[#768BDD]
  hidden
  bottom-0
  top-0
  m-3
  rounded-3xl
  overflow-hidden
  '>
    <div
      className='flex
  flex-col
  gap-y-2
  w-full
  h-full
  p-3
  bg-[#0e0e0e]
  bg-opacity-90
  bg-clip-padding
  backdrop-filter
  backdrop--blur_safari
  backdrop-blur-3xl
  '
    >
      <div className='flex 
    gap-x-2 
    items-center 
    p-2
    justify-center  '>
        <LogoSmall />
      </div>
      <div className='flex
    flex-col
    py-3
     
    '>
        <Items page={page} slug={slug} />
      </div>
      <div className='px-16'>
        <Separator
          orientation='horizontal'
          className='bg-[#333336]'
        />
      </div>
      <div className="px-3 flex flex-col gap-y-2">
        <div className='flex gap-x-2 items-center'>
          <ClerkAuthState />
          <p className="text-[#9B9CA0] text-[14px] ">Profile</p>

        </div>
        <div className='flex gap-x-2 text-[12px]'>
          <HelpCircleIcon className='h-[17px]' />Help
        </div>

      </div>
      <SubscriptionPlan>
        <div className='flex-1 flex flex-col justify-end'>
          <UpgradeCard />
        </div>
      </SubscriptionPlan>
    </div>
  </div>

}

export default Sidebar
'use client'
import Sheet from '../sheet'
import { PAGE_BREAD_CRUMBS } from '@/constants/pages'
import { usePaths } from '@/hooks/user-nav'
import { HelpCircleIcon, Menu } from "lucide-react"
import React from 'react'
import Items from '../sidebar/items'
import { Separator } from '@/components/ui/separator'
import ClerkAuthState from '../clerk-auth-state'
import { SubscriptionPlan } from '../subscription-plan'
import UpgradeCard from '../sidebar/upgrade'
import { LogoSmall } from '@/svgs/logo-small'
import CreateAutomation from '../create-automation'
import Search from "../search"

type Props = {
    slug: string
}

const Navbar = ({ slug }: Props) => {
    const { page } = usePaths()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug

    return currentPage && <div className='flex flex-col'>
        <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
            <span className='lg:hidden flex items-center flex-1 gap-x-2'>
                <Sheet trigger={<Menu />} className="lg:hidden" side='left'>
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
                
            </Sheet>

        </span>
        <Search />
        <CreateAutomation />
    </div>
    </div >

}

export default Navbar
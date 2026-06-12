'use client'

import { ChevronRight, PencilLineIcon } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../active-automation-button'
import { useQueryAutomation } from '@/hooks/user-queries'
import { useEditAutomation } from '@/hooks/use-automations'
import { useMutationDataState } from '@/hooks/use-mutation-data'
import { Input } from '@/components/ui/input'


type Props = {
  id: string
}

const AutomationsBreadCrumb = ({ id }: Props) => {
  const { data } = useQueryAutomation(id)
  const { edit, enableEdit, inputRef, isPending } = useEditAutomation(id)
  console.log(inputRef.current?.value)

  const { latestVariable } = useMutationDataState(['update-automation'])
  // User mutation stuff to update the autmation
  return (
    <div className='rounded-full w-full p-5 bg-[#1818B1A] flex items-center'>
      <div className='flex items-center gap-x-3 min-w-0'>
        <p className='text-[#9B9CA0] truncate'>Automations</p>
        <ChevronRight className='flex-shrink-0' color='#9B9CA0' />
        <span className='flex gap-x-3 items-center min-w-0'>

          {edit ? (
            <Input
              type='text'
              ref={inputRef}
              placeholder={ 'Add a new name'}
              className='bg-transparent h-auto outline-none text-base border-none p-0'
            />

          ) : (
            <p className='text-[#516fe8] truncate'>{latestVariable?.variables ? latestVariable?.variables.name :  data?.data?.name}</p>
          )}
         {edit? (<></>) : (
           <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4 p-1' 
           onClick={enableEdit}
           >
           <PencilLineIcon size={14} />
         </span>
         )}
        </span>
      </div>
      <div className='flex items-center gap-x-5 ml-auto'>
        <p className='hidden md:block truncate text-text-secondary/60 text-sm min-w-0'>
          All states are automatically saved
        </p>
        <div className='flex gap-x-5 flex-shrink-0'>
          <p className='text-text-secondary truncate text-sm min-w-0'>
            Changes Saved
          </p>
          <p className='text-text-secondary text-sm truncate min-w-0'>
            Undo | Redo
          </p>
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  )
}

export default AutomationsBreadCrumb
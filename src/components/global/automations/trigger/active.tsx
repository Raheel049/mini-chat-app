import React from 'react'

type Props = {
    type: string
    keywords: {
        id: string
        word: string
        automationId: string | null
    }
}

const ActiveTrigger = ({keywords, type}: Props) => {
  return (
    <div className='bg-background-80 p-3 rounded-xl w-full '>
        <div className='flex gap-2 items-center'>asad</div>
    </div>
  )
}

export default ActiveTrigger
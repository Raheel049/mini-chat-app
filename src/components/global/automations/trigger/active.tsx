import React from 'react'
import { SiInstagram } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

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
        <div className='flex gap-2 items-center'>{(type === 'COMMENT' ?  <SiInstagram /> : <FaTelegramPlane />)}
            <p className='text-lg'>
                {type === 'COMMENT' ? 'User comment on my post.' : 'User sends me a direct messgae.'}
            </p>
        </div>
        <p className='text-text-secondary'>
            {type === 'COMMENT' ? 'If the user comment on a video that is setup to listen for keywords, this automtion will fire' : 'If the user send your a message that contains a keyword, this automation will fire'}
        </p>
        <div className='flex gap-2 mt-5 flex-wrap'>
            {keywords.map((word) => (
                <div key={word.id}
                className='bg-gradient-to-br from-[#3352CC] to-[#!C2D70] flex items-center
                gap-x-2 capitalize text-white font-light py-1 px-4 rounded-full'
                >
                    <p>
                        {word.word}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ActiveTrigger
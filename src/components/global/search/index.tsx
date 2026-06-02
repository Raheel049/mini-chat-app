import React from 'react'
import {SearchIcon} from "lucide-react"

type Props = {}

const Search = (props: Props) => {
  return (
  <div className='hidden lg:flex overflow-hidden gap-x-2 border-2 border-[#3352CC] rounded-full px-4 py-1 items-center flex-1'>
    <SearchIcon className='text-[#3352CC]' />
  </div>
  )
}

export default Search
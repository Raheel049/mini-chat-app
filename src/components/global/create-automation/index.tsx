import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { Activity } from 'lucide-react'
import { useCreateAutomation } from '@/hooks/use-automations'

type Props = {}

const CreateAutomation = (props: Props) => {

  const {} = useCreateAutomation()

  return <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
  <Loader state={false} />
  <Activity />
  <p className='lg:inline hidden'>Create An Automation</p>
</Button>
  
}

export default CreateAutomation
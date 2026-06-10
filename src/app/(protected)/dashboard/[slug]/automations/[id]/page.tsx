import { getAutomationInfo } from '@/action/automations'
import Trigger from '@/components/global/automations/trigger'
import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations'
import { FileWarning } from 'lucide-react'
import React from 'react'

type Props = {
    params: {id: string}
}

//WIP: save some matadata
export async function generateMetaData({params,}: {
  params: {id: string}
}){
  const info =  await getAutomationInfo(params.id)
}

const Page = ({params}: Props) => {
    //WIP: prefetch user automation data
  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationsBreadCrumb id={params.id} />
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-coll bg-[#1D1D1D] gap-y-3'>
          <div className='flex gap-2 '>
            <FileWarning color='#1C2D70'/>
            When...
          </div>
          <Trigger id={params.id} />
        </div>
    </div>
  )
}

export default Page
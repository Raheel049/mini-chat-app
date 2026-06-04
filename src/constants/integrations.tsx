import { SiInstagram, SiSalesforce } from "react-icons/si"

type Props = {
    title: string
    icon: React.ReactNode
    description: string
    startegy: 'INSTAGRAM' | 'CRM'
}

export const INTEGRATION_CARDS: Props[] =[
    {
        title: 'Connect Instagram',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        icon : <SiInstagram color="#3352CC" className="h-[50px] w-[50px]"/>,
        startegy: 'INSTAGRAM',
    },

    {
        title: 'Connect Salesforce',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        icon: <SiSalesforce color="#3352CC" className="h-[50px] w-[50px]"/>,
        startegy: 'CRM',
    }
]